import styled from 'styled-components';
import Link from 'next/link';

function HeaderComponent() {
  const handleSwitchThemeClick = () => {};

  return (
    <Header>
      <div>
        <Grid>
          <div />
          <div>
            <Link href='/'>
              <a>Logo</a>
            </Link>
          </div>
          <div>
            <button onClick={handleSwitchThemeClick}>Switch theme</button>
          </div>
        </Grid>
      </div>
    </Header>
  );
}

const Header = styled.header`
  height: 5rem;

  > div {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  padding: 1rem 0;

  > div {
    &:nth-child(2) {
      justify-self: center;
    }
    &:last-child {
      justify-self: end;
    }
  }
`;

export default HeaderComponent;
