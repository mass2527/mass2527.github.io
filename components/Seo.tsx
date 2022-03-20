import Head from 'next/head';
import {Router, withRouter} from 'next/router';
import {ReactNode} from 'react';

interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
}

const Seo = withRouter(
  ({
    title,
    description = 'Frontend Engineer 김동호입니다. 그때그때 흥미를 느끼는 컨셉에 대해 공유하거나 해외 시니어 개발자들의 글을 번역해서 제공합니다.',
    image = 'https://images.unsplash.com/photo-1592289701772-4a4a8949f8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
    router,
    children,
  }: SeoProps & {router: Router}) => (
    <Head>
      {/* DEFAULT */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {title != null && <title key="title">{title}</title>}
      {description != null && (
        <meta key="description" name="description" content={description} />
      )}

      {/* OPEN GRAPH */}
      <meta property="fb:app_id" content="703328420682578" />
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:url"
        key="og:url"
        content={`https://nextjs-blog-gray.vercel.app${router.pathname}`}
      />
      {title != null && (
        <meta property="og:title" content={title} key="og:title" />
      )}
      {description != null && (
        <meta
          property="og:description"
          key="og:description"
          content={description}
        />
      )}
      <meta property="og:image" key="og:image" content={image} />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" key="twitter:site" content="kim.dongho" />
      <meta name="twitter:creator" key="twitter:creator" content="kim.dongho" />
      {title != null && (
        <meta name="twitter:title" key="twitter:title" content={title} />
      )}
      {description != null && (
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
      )}
      <meta name="twitter:image" key="twitter:image" content={image} />
      {children}
    </Head>
  )
);

export default Seo;
