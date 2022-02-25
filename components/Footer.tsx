import styled from 'styled-components';
import { flexColumn } from 'styles/flex';

function HeaderComponent() {
  return (
    <Footer>
      <div>
        <p>This is footer</p>
      </div>
    </Footer>
  );
}

const Footer = styled.footer`
  padding: 2rem 0;

  > div {
    ${flexColumn('normal', 'center')}

    padding: 0 2rem;
  }
`;

export default HeaderComponent;
