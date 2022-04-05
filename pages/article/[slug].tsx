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
import Seo from 'components/Seo';

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
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Wrapper>
      <Seo
        title={frontMatter.title}
        description={frontMatter.description}
        image={frontMatter.ogImage.url}
      />

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
`;

const Article = styled.article`
  max-width: 672px;

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
    color: ${({theme}) =>
      theme.isDarkMode ? theme.colors.gray[200] : theme.colors.gray[700]};
  }
  *:not(pre) {
    code {
      border-radius: ${({theme}) => theme.radiuses.small};
      padding: ${({theme}) => theme.spaces['x-small']};
      font-size: ${({theme}) => theme.fontSizes.small};
    }
  }
  blockquote {
    border-radius: ${({theme}) => theme.radiuses.medium};
    padding: ${({theme}) => theme.spaces['x-large']};
    margin-bottom: ${({theme}) => theme.spaces['x-large']};
  }
  ul {
    list-style: inside;
  }
  ol {
    list-style: decimal;
    list-style-position: inside;
  }
  ul,
  ol {
    margin-bottom: ${({theme}) => theme.spaces.medium};
  }
  img {
    width: 100%;
    border-radius: ${({theme}) => theme.radiuses.medium};
  }
`;

const Date = styled.time``;

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
