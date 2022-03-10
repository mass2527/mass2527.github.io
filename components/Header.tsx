import styled from 'styled-components';
import Link from 'next/link';
import {media} from 'styles/media';
import {useRecoilState} from 'recoil';
import {themeState} from 'states/theme';
import {IoMdSunny} from 'react-icons/io';
import {FaMoon} from 'react-icons/fa';
import logo from 'assets/logo.png';
import Image from 'next/image';

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
              <StyledLink>
                <Image width="50" height="60" src={logo} />
              </StyledLink>
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
  display: flex;
  align-items: center;
  height: 100%;

  > div {
    flex: 1;
    height: 100%;
    &:nth-child(2) {
      display: grid;
      place-items: center;
    }
    &:last-child {
      display: flex;
      justify-content: flex-end;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.colors.primary};
    }
  }
`;

const StyledLink = styled.a`
  height: 60px;
`;

export default HeaderComponent;
