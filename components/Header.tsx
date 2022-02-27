import styled from 'styled-components';
import Link from 'next/link';
import {media} from 'styles/media';

function HeaderComponent() {
  const handleSwitchThemeClick = () => {};

  return (
    <Header>
      <div>
        <Grid>
          <div />
          <div>
            <Link href="/">
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
  height: ${({theme}) => theme.heights.header};

  > div {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    padding: 0 ${({theme}) => theme.spaces['x-large']};
    margin: 0 auto;

    ${media.lessThan('tablet')`
    padding: 0 ${({theme}) => theme.spaces.large};
    `}
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  padding: ${({theme}) => theme.spaces.large} 0;

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
