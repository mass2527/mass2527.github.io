import fs from 'fs';
import matter from 'gray-matter';

export const getAllArticles = () => {
  const articleDir = fs.readdirSync('pages/article');
  const articles = articleDir.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fileContent = fs.readFileSync(`pages/article/${fileName}`, 'utf8');
    const {data, content} = matter(fileContent);

    return {slug, data, content};
  });

  return articles;
};
