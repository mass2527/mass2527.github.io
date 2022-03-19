import styled from 'styled-components';

import {ComponentProps} from 'react';

interface ResponsiveIFrameProps extends ComponentProps<'iframe'> {}

const ResponsiveIFrame = ({
  allow = 'accelerometer; encrypted-media; picture-in-picture; gyroscope;',
  allowFullScreen = true,
  ...rest
}: ResponsiveIFrameProps) => {
  return (
    <Wrapper>
      <iframe allow={allow} allowFullScreen={allowFullScreen} {...rest} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  &:after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({theme}) => theme.radiuses.medium};
  }
`;

export default ResponsiveIFrame;
