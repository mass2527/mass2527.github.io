import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/night-owl.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>

        <script src="//cdn.jsdelivr.net/gh/TRSasasusu/highlightjs-highlight-lines.js@1.1.5/highlightjs-highlight-lines.min.js"></script>
        <script>hljs.highlightAll();</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
