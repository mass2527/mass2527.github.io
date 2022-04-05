import styled from 'styled-components';

import {flexRow} from 'styles/flex';
import {media} from 'styles/media';

const FooterComponent = () => {
  return (
    <Footer>
      <div>
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
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  height: ${({theme}) => theme.heights.footer};

  div {
    ${flexRow('space-between', 'center')};
    max-width: 672px;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    border-top: 1px solid ${({theme}) => theme.colors.border};
  }
`;

export default FooterComponent;
