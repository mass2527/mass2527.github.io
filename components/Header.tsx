import {FaMoon} from 'react-icons/fa';
import {IoMdSunny} from 'react-icons/io';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';

import Link from 'next/link';

import {themeState} from 'states/theme';

import {media} from 'styles/media';

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
          <div>
            <Link href="/" passHref>
              <StyledLink>
                <span>
                  <b>KIM:DONGHO</b> tech blog
                </span>
              </StyledLink>
            </Link>
          </div>
          <div />

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
    width: 100%;
    height: 100%;
    padding: 0 ${({theme}) => theme.spaces['2x-large']};
    margin: 0 auto;

    ${media.lessThan('tablet')`
    padding: 0 ${({theme}) => theme.spaces.medium};
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
    &:nth-child(1) {
      display: flex;
      align-items: center;
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
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fontSizes.large};
  word-break: inherit;
`;

export default HeaderComponent;
