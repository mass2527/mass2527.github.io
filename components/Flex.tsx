import {CSSProperties} from 'react';
import styled from 'styled-components';

interface FlexProps {
  children: (JSX.Element | null | boolean)[];
  spacing?: number;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
}

const FlexComponent = ({
  children,
  spacing,
  justifyContent,
  alignItems = 'center',
  direction = 'row',
}: FlexProps) => {
  return (
    <Flex
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
