import styled from 'styled-components';

import type {GetStaticProps, NextPage} from 'next';

import {getAllArticles} from 'lib/data';

import {media} from 'styles/media';
import Section from 'components/Section';
import Seo from 'components/Seo';
import BlogPostCard from 'components/BlogPostCard';
import Heading from 'components/Heading';

const GRADIENTS = [
  ['#D8B4FE', '#818CF8'],
  ['#6EE7B7', '#3B82F6', '#9333EA'],
  ['#FDE68A', '#FCA5A5', '#FECACA'],
];

interface HomePageProps {
  articles: {
    slug: string;
    title: string;
    category: string;
    date: Date;
    content: string;
  }[];
}

const HomePage: NextPage<HomePageProps> = ({articles}) => {
  return (
    <Wrapper>
      <Seo title="김동호 - Front-end developer">
        <link rel="icon" href="/favicon.ico" />
      </Seo>

      <div>
        <Section>
          <Grid>
            {articles.map((article, index) => (
              <BlogPostCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                category={article.category}
                date={article.date}
                gradient={GRADIENTS[index]}
              />
            ))}
          </Grid>
        </Section>
      </div>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles(['title', 'date', 'slug', 'category']);

  return {
    props: {articles},
  };
};

const Wrapper = styled.div`
  > div {
    max-width: 672px;
    margin: ${({theme}) => theme.spaces.large} auto
      ${({theme}) => theme.spaces['2x-large']};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme}) => theme.spaces['x-large']};

  ${media.lessThan('medium')`
  grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan('small')`
  grid-template-columns: repeat(1, 1fr);
  `}

  img {
    border-radius: ${({theme}) => theme.radiuses.medium};
  }
`;

export default HomePage;
