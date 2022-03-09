import styled from 'styled-components';
import {flexRow} from 'styles/flex';

const FooterComponent = () => {
  return (
    <Footer>
      <div>
        <p>
          © 2022. Built with <a href="https://nextjs.org">Nextjs</a>. Deployed
          with <a href="https://vercel.com">Vercel</a>. Github
        </p>
        <p>
          <a href="https://github.com/mass2527">Github</a>
        </p>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  height: ${({theme}) => theme.heights.footer};
  padding: ${({theme}) => theme.spaces['x-large']} 0;
  border-top: 1px solid ${({theme}) => theme.colors['gray-10']};

  > div {
    ${flexRow('space-between', 'center')}

    padding: 0 ${({theme}) => theme.spaces['x-large']};
  }
`;

export default FooterComponent;
