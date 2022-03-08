import {serialize} from 'next-mdx-remote/serialize';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote';
import {ParsedUrlQuery} from 'querystring';
import {getAllArticles, getArticleBySlug} from 'lib/data';
import {GetStaticPaths, GetStaticProps, NextPage} from 'next';
import dayjs from 'dayjs';

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
  return (
    <div>
      {/* Head  */}
      <h1>{frontMatter.title}</h1>
      <time>{dayjs(frontMatter.date).format('YYYY. MM. DD')}</time>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

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
