import {useHasMounted, useRect} from 'hooks';
import styled from 'styled-components';

import ReactDOM from 'react-dom';
import {
  createContext,
  Dispatch,
  MouseEvent,
  ReactNode,
  RefObject,
  SetStateAction,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

const MenuContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: Dispatch<SetStateAction<boolean>>;
      menuListRef: RefObject<HTMLDivElement>;
      menuButtonRef: RefObject<HTMLButtonElement>;
    }
  | undefined
>(undefined);

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error(
      'useMenuContext hook should be used inside of Menu component'
    );
  }
  return context;
};

interface MenuProps {
  children: JSX.Element[];
}

const Menu = ({children}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuListRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      menuListRef,
      menuButtonRef,
    }),
    [isOpen]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const Button = ({children}: {children: ReactNode}) => {
  const {setIsOpen, menuButtonRef} = useMenuContext();

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    // TODO: replace with Button component
    <MenuButton ref={menuButtonRef} type="button" onClick={handleClick}>
      {children}
    </MenuButton>
  );
};

const getDirection = (
  targetRect: DOMRect | null,
  popOverRect: DOMRect | null
) => {
  if (!targetRect || !popOverRect) {
    return {};
  }

  return {
    // Assume that collision in both directions at the same time is not possible ( top & bottom or right & left )
    isDirectionDown:
      targetRect.bottom + popOverRect.height < window.innerHeight,
    isDirectionRight: targetRect.right + popOverRect.width < window.innerWidth,
  };
};

const getPosition = (
  targetRect: DOMRect | null,
  popOverRect: DOMRect | null
) => {
  if (!targetRect || !popOverRect) {
    return {};
  }
  const {isDirectionDown} = getDirection(targetRect, popOverRect);

  return {
    top: isDirectionDown
      ? targetRect?.bottom + window.pageYOffset
      : targetRect.top - popOverRect.height + window.pageYOffset,
    left: targetRect.left,
  };
};

const List = ({children}: {children: ReactNode}) => {
  const {isOpen, menuListRef, menuButtonRef} = useMenuContext();
  const menuListRect = useRect(menuListRef, {observe: isOpen});
  const menuButtonRect = useRect(menuButtonRef, {observe: isOpen});
  const hasMounted = useHasMounted();

  if (!isOpen || !hasMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <MenuList
      ref={menuListRef}
      role="menu"
      style={{
        ...getPosition(menuButtonRect, menuListRect),
      }}>
      {children}
    </MenuList>,
    document.getElementById('portal') as HTMLDivElement
  );
};

const Item = ({
  onClick,
  children,
}: {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}) => {
  return (
    <MenuItem role="menuitem" onClick={onClick}>
      {children}
    </MenuItem>
  );
};

const MenuList = styled.div`
  position: absolute;
  border-radius: ${({theme}) => theme.radiuses.medium};
  background-color: white;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
`;

const MenuButton = styled.button`
  color: ${({theme}) => theme.colors.primary};
`;

const MenuItem = styled.div`
  color: ${({theme}) => theme.colors['gray-90']};
  cursor: pointer;
  padding: ${({theme}) => theme.spaces.small};

  &:hover {
    color: ${({theme}) => theme.colors['purple-40']};
  }
`;

Menu.Button = Button;
Menu.List = List;
Menu.Item = Item;

export default Menu;
