import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import {media} from './media';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    body{
        font-family: -apple-system,BlinkMacSystemFont,Bazier Square,Noto Sans KR,Segoe UI,Apple SD Gothic Neo,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        color:${({theme}) => theme.colors.primary};
        line-height:${({theme}) => theme.lineHeights.medium};
        background-color:${({theme}) => theme.colors.wash};
    }
    main{
        min-height:calc(100vh - 160px);
        padding:${({theme}) => theme.spaces['x-large']};

        ${media.lessThan('tablet')`
        padding:${({theme}) => theme.spaces.large};
        `}
    }
    h1{
        font-size:48px;
        font-weight: ${({theme}) => theme.fontWeights.bold};
        line-height: ${({theme}) => theme.lineHeights['x-small']};
    }
    h2{
        font-size:24px;
        font-weight: ${({theme}) => theme.fontWeights['semi-bold']};
        line-height: ${({theme}) => theme.lineHeights.small};
    }
    h3{
        font-size: 22px;
        font-weight: ${({theme}) => theme.fontWeights['semi-bold']};
        line-height: ${({theme}) => theme.lineHeights.large};
    }
    h4{
        font-size:22px;
        font-weight: ${({theme}) => theme.fontWeights['medium']};
        line-height: ${({theme}) => theme.lineHeights.large};
    }
    h5{
        font-size:20px;
        font-weight: ${({theme}) => theme.fontWeights['medium']};
        line-height: ${({theme}) => theme.lineHeights.large};
    }
    h6{
        font-size:18px;
        font-weight: ${({theme}) => theme.fontWeights['medium']};
        line-height: ${({theme}) => theme.lineHeights.large};
    }
    button{
        cursor:pointer;
        background-color:transparent;
        border:none;
    }
    a{
        color:${({theme}) => theme.colors['blue-40']};
        cursor:pointer;
    }
`;

export default GlobalStyles;
