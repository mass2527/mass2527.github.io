import {CSSProperties} from 'react';
import styled, {CSSProp} from 'styled-components';

interface FlexProps {
  className?: string;
  direction?: CSSProperties['flexDirection'];
  spacing?: number;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  children: (JSX.Element | null | boolean)[];
}

const FlexComponent = ({
  className,
  direction = 'row',
  spacing,
  justifyContent,
  alignItems = 'center',
  children,
}: FlexProps) => {
  return (
    <Flex
      className={className}
      spacing={spacing}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Flex>
  );
};

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({direction}) => direction};
  gap: ${({spacing}) => spacing && `${spacing * 5}px`};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
`;

export default FlexComponent;
