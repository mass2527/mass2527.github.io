import styled from 'styled-components';
import {flexRow} from 'styles/flex';

const FooterComponent = () => {
  return (
    <Footer>
      <small>
        <span>
          Built with <a href="https://nextjs.org">Nextjs</a>.
        </span>{' '}
        <span>
          Deployed with <a href="https://vercel.com">Vercel</a>.
        </span>
      </small>
      <small>
        <a href="https://github.com/mass2527">Github</a>
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
