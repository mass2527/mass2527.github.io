import styled from 'styled-components';
import {flexColumn} from 'styles/flex';

const HeaderComponent = () => {
  return (
    <Footer>
      <div>
        <p>This is footer</p>
      </div>
    </Footer>
  );
};

const Footer = styled.footer`
  height: ${({theme}) => theme.heights.footer};
  padding: ${({theme}) => theme.spaces['x-large']} 0;
  border-top: 1px solid ${({theme}) => theme.colors['gray-10']};

  > div {
    ${flexColumn('normal', 'center')}

    padding: 0 ${({theme}) => theme.spaces['x-large']};
  }
`;

export default HeaderComponent;
