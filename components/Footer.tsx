import styled from 'styled-components';

import {flexRow} from 'styles/flex';

const FooterComponent = () => {
  return (
    <Footer>
      <small>
        <a
          href="https://www.linkedin.com/in/dh-kim-733227200"
          target="_blank"
          rel="noopener noreferrer">
          Linkedin
        </a>
      </small>
      <small>
        <a
          href="https://github.com/mass2527"
          target="_blank"
          rel="noopener noreferrer">
          Github
        </a>
      </small>
    </Footer>
  );
};

const Footer = styled.footer`
  ${flexRow('space-between', 'center')};
  height: ${({theme}) => theme.heights.footer};
  border-top: 1px solid ${({theme}) => theme.colors['gray-10']};
  padding: 0 ${({theme}) => theme.spaces['x-large']};
`;

export default FooterComponent;
