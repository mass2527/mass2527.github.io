import dayjs from 'dayjs';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {serialize} from 'next-mdx-remote/serialize';
import Prism from 'prismjs';
import {ParsedUrlQuery} from 'querystring';
import styled from 'styled-components';

import type {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import {useEffect} from 'react';

import {getAllArticles, getArticleBySlug} from 'lib/data';

import {media} from 'styles/media';
import ResponsiveIFrame from 'components/ResponsiveIFrame';

import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

const ArticlePage: NextPage<{
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    category: string;
    date: Date;
    description: string;
    slug: string;
    title: string;
    ogImage: {
      url: string;
    };
  };
}> = ({mdxSource, frontMatter}) => {
  console.log(frontMatter);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Wrapper>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title key="title">{frontMatter.title}</title>
        <meta
          key="description"
          name="description"
          content={frontMatter.description}
        />

        {/* OPEN GRAPH */}
        <meta property="fb:app_id" content="703328420682578" />
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:url"
          key="og:url"
          content={`https://nextjs-blog-gray.vercel.app/article/${frontMatter.slug}`}
        />
        <meta property="og:title" content={frontMatter.title} key="og:title" />
        <meta
          property="og:description"
          key="og:description"
          content={frontMatter.description}
        />
        <meta
          property="og:image"
          key="og:image"
          content={frontMatter.ogImage.url}
        />

        {/* TWITTER */}
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta name="twitter:site" key="twitter:site" content="kim.dongho" />
        <meta
          name="twitter:creator"
          key="twitter:creator"
          content="kim.dongho"
        />
        <meta
          name="twitter:title"
          key="twitter:title"
          content={frontMatter.title}
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={frontMatter.description}
        />
        <meta
          name="twitter:image"
          key="twitter:image"
          content={frontMatter.ogImage.url}
        />
      </Head>
      <Article>
        <h1>{frontMatter.title}</h1>
        <Date>{dayjs(frontMatter.date).format('YYYY. MM. DD')}</Date>
        <MDXRemote {...mdxSource} components={{ResponsiveIFrame}} />
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: ${({theme}) =>
    `${theme.spaces['2x-large']} ${theme.spaces['x-large']}`};

  ${media.lessThan('tablet')`
  padding: ${({theme}) => `${theme.spaces['x-large']} ${theme.spaces.medium}`};
  `}
`;

const Article = styled.article`
  max-width: 800px;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${({theme}) => theme.spaces['x-large']};
  }
  p {
    margin: ${({theme}) => theme.spaces.medium} 0;
    font-size: ${({theme}) => theme.fontSizes.medium};
    color: ${({theme}) => theme.colors.secondary};

    code {
      background-color: ${({theme}) => theme.colors['code-background']};
      border-radius: ${({theme}) => theme.radiuses.small};
      padding: ${({theme}) => theme.spaces['x-small']};
      font-size: ${({theme}) => theme.fontSizes.small};
      color: ${({theme}) => theme.colors.secondary};
    }
  }
  blockquote {
    border-radius: ${({theme}) => theme.radiuses.medium};
    padding: ${({theme}) => theme.spaces['x-large']};
    margin-bottom: ${({theme}) => theme.spaces['x-large']};
    background-color: ${({theme}) => theme.colors.card};
  }
`;

const Date = styled.time`
  color: ${({theme}) => theme.colors['gray-40']};
`;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<{}, Params> = async ({params}) => {
  const {slug} = params!;
  const article = getArticleBySlug(slug, [
    'slug',
    'title',
    'category',
    'date',
    'description',
    'content',
    'ogImage',
  ]);
  const {content, ...frontMatter} = article;
  const mdxSource = await serialize(content);

  return {
    props: {mdxSource, frontMatter},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(['slug']);
  const paths = articles.map(({slug}) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  };
};

export default ArticlePage;
