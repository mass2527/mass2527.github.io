import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {ParsedUrlQuery} from 'querystring';
import {getAllArticles, getArticleBySlug} from 'lib/data';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import dayjs from 'dayjs';
import styled from 'styled-components';
import ResponsiveIFrame from 'components/ResponsiveIFrame';
import Head from 'next/head';
import {useEffect} from 'react';
import Prism from 'prismjs';
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
  };
}> = ({mdxSource, frontMatter}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
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
    font-size: ${({theme}) => theme.fontSizes.large};

    code {
      font-weight: ${({theme}) => theme.fontWeights['semi-bold']};
      font-size: ${({theme}) => theme.fontSizes.small};
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
