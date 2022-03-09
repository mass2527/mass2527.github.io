import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

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
        padding:${({theme}) => theme.spaces['x-large']} 10vw;
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

    /* syntax highlighting  */
    pre{
        background-color: #eff0f1;
        padding: 16px;
        overflow: auto;
        font-size: 13px;
        margin-bottom: 4.1rem;
        padding: 3.7rem 0 1.6rem .4rem;
        border-radius: 12px;
        background-image: url(https://ik.imagekit.io/garbagevalue/garbage/window-buttons_gt8xoXxWn.png);
        background-repeat: no-repeat;
        background-size: 44px 10px;
        background-position: 16px 14px;
    }
    pre[class*="language-"],
    code[class*="language-"] {
        color: #9cdcfe;
        font-size: 14px;
        text-shadow: none;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;
    }

    pre[class*="language-"]::selection,
    code[class*="language-"]::selection {
        text-shadow: none;
        background: #b3d4fc;
    }

    @media print {
        pre[class*="language-"],
        code[class*="language-"] {
            text-shadow: none;
        }
    }

    pre[class*="language-"] {
        padding: 2em;
        padding-top: 40px;
        margin: .5em 0;
        overflow: auto;
        background-color: #1e1e1e;
    }

    :not(pre) > code[class*="language-"] {
        padding: .1em .3em;
        border-radius: .3em;
        color: #db4c69;
        background: #f9f2f4;
    }


    /*********************************************************
    * Tokens
    */
    .namespace {
        opacity: .7;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #6a9955;
    }

    .token.punctuation {
        color: #d4d4d4;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: #b5cea8;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.inserted {
        color: #ce9178;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: #d4d4d4;
        background: #1e1e1e;
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: #569cd6;
    }

    .token.function {
        color: #dcdcaa;
    }

    .token.regex,
    .token.important,
    .token.variable {
        color: #d16969;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }

    .token.italic {
        font-style: italic;
    }

    .token.constant {
        color: #9CDCFE;
    }

    .token.class-name, 
    .token.builtin
    {
        
        color: #4EC9B0;
    }

    .token.parameter {
        color: #9CDCFE;
    }

    .token.interpolation {
        color: #9CDCFE;
    }

    .token.punctuation.interpolation-punctuation {
        color: #569cd6;
    }

    .token.boolean {
        color: #569cd6;
    }

    .token.property {
        color: #9cdcfe;
    }

    .token.selector {
        color: #d7ba7d;
    }

    .token.tag {
        color: #569cd6;
    }

    .token.attr-name {
        color: #9cdcfe;
    }

    .token.attr-value {
        color: #ce9178;
    }

    .token.entity {
        color: #4ec9b0;
        cursor: unset;
    }

    .token.namespace {
        color: #4ec9b0;
    }
    /*********************************************************
    * Language Specific
    */
    pre[class*="language-javascript"],
    code[class*="language-javascript"] {
        color: #4ec9b0;
    }

    pre[class*="language-css"],
    code[class*="language-css"] {
        color: #CE9178;
    }

    pre[class*="language-html"],
    code[class*="language-html"] {
        color: #d4d4d4;
    }

    .language-html .token.punctuation {
        color: #808080;
    }
    /*********************************************************
    * Line highlighting
    */
    pre[data-line] {
        position: relative;
    }

    pre[class*="language-"] > code[class*="language-"] {
        position: relative;
        z-index: 1;
    }

    .line-highlight {
        position: absolute;
        left: 0;
        right: 0;
        padding: inherit 0;
        margin-top: 1em;
        background: #f7ebc6;
        box-shadow: inset 5px 0 0 #f7d87c;
        z-index: 0;
        pointer-events: none;
        line-height: inherit;
        white-space: pre;
    }
`;

export default GlobalStyles;
