import styled from 'styled-components';
import Link from 'next/link';
import {media} from 'styles/media';
import {useRecoilState} from 'recoil';
import {themeState} from 'states/theme';
import {IoMdSunny} from 'react-icons/io';
import {FaMoon} from 'react-icons/fa';

const HeaderComponent = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const isDarkMode = theme === 'dark';

  const handleSwitchThemeClick = () => {
    const nextTheme = isDarkMode ? 'light' : 'dark';
    setTheme(nextTheme);
  };

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
            <button onClick={handleSwitchThemeClick}>
              {isDarkMode ? <FaMoon /> : <IoMdSunny />}
            </button>
          </div>
        </Grid>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: ${({theme}) => theme.heights.header};
  border-bottom: 1px solid ${({theme}) => theme.colors['gray-10']};

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

    svg {
      width: 18px;
      height: 18px;
      color: ${({theme}) => theme.colors.primary};
    }
  }
`;

export default HeaderComponent;
