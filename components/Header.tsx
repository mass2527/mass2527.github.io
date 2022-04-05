import {HiOutlineSun, HiOutlineMoon} from 'react-icons/hi';
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
        <Nav>
          <div>
            <Link href="/" passHref>
              <StyledLink>
                <span>
                  <b>KIM:DONGHO</b>
                </span>
              </StyledLink>
            </Link>
          </div>
          <div />

          <div>
            <StyledButton
              onClick={handleSwitchThemeClick}
              aria-label={
                theme === 'dark' ? '라이트 모드로 변경' : '다크 모드로 변경'
              }>
              {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
            </StyledButton>
          </div>
        </Nav>
      </div>
    </Header>
  );
};

const Header = styled.header`
  height: ${({theme}) => theme.heights.header};

  > div {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 672px;
  height: 100%;
  margin: 0 auto;

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
      align-items: center;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.colors.primary};
    }
  }
`;

const StyledLink = styled.a`
  font-size: ${({theme}) => theme.fontSizes.large};
  word-break: inherit;
  color: ${({theme}) => theme.colors.primary};
`;

const StyledButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: ${({theme}) => theme.radiuses.medium};
  background-color: ${({theme}) =>
    theme.isDarkMode ? theme.colors.gray[600] : theme.colors.gray[200]};
  color: ${({theme}) =>
    theme.isDarkMode ? theme.colors.gray[200] : theme.colors.gray[600]};
`;

export default HeaderComponent;
