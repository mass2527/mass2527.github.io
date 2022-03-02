import fs from 'fs';
import matter from 'gray-matter';

const articlesDirectory = 'pages/article';

export const getArticleSlugs = () => fs.readdirSync(articlesDirectory);

type Items = {
  [key: string]: string;
};

export const getArticleBySlug = (slug: string, fields: string[]) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = `${articlesDirectory}/${realSlug}.mdx`;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {data, content} = matter(fileContents);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllArticles = (fields: string[] = []) => {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return articles;
};