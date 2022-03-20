import dayjs from 'dayjs';
import styled, {css} from 'styled-components';

import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {getAllArticles} from 'lib/data';

import {media} from 'styles/media';
import Flex from 'components/Flex';
import Heading from 'components/Heading';
import Section from 'components/Section';
import Seo from 'components/Seo';

interface HomePageProps {
  articles: {
    slug: string;
    title: string;
    category: string;
    date: Date;
    description: string;
    content: string;
    coverImage: string;
  }[];
}

const unsplashImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `https://images.unsplash.com/${src}&auto=format&fit=crop&w=${width}&q=${
    quality || 75
  }`;
};

const HomePage: NextPage<HomePageProps> = ({articles}) => {
  return (
    <Wrapper>
      <Seo title="김동호 개발 블로그">
        <link rel="icon" href="/favicon.ico" />
      </Seo>

      <Section>
        <Grid>
          {articles.map((article) => (
            <Link key={article.slug} href={`/article/${article.slug}`} passHref>
              <Anchor>
                <article>
                  <Image
                    loader={unsplashImageLoader}
                    src={article.coverImage}
                    width="100%"
                    height="64%"
                    layout="responsive"
                    objectFit="cover"
                    priority
                    alt=""
                  />

                  <Flex
                    justifyContent="space-between"
                    css={css`
                      margin-bottom: ${({theme}) => theme.spaces.large};
                    `}>
                    <Category>{article.category}</Category>
                    <Date dateTime={article.date.toString()}>
                      {dayjs(article.date).format('YYYY. MM. DD')}
                    </Date>
                  </Flex>
                  <Heading
                    css={css`
                      margin-bottom: ${({theme}) => theme.spaces.small};
                    `}>
                    {article.title}
                  </Heading>
                  <Description>{article.description}</Description>
                </article>
              </Anchor>
            </Link>
          ))}
        </Grid>
      </Section>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles([
    'title',
    'date',
    'slug',
    'category',
    'description',
    'coverImage',
  ]);

  return {
    props: {articles},
  };
};

const Wrapper = styled.div`
  padding: ${({theme}) =>
    `${theme.spaces['2x-large']} ${theme.spaces['x-large']}`};

  ${media.lessThan('tablet')`
  padding: ${({theme}) => `${theme.spaces['x-large']} ${theme.spaces.medium}`};
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({theme}) => theme.spaces['2x-large']};

  ${media.lessThan('desktop')`
  grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan('tablet')`
  grid-template-columns: repeat(1, 1fr);
  `}

  img {
    border-radius: ${({theme}) => theme.radiuses.medium};
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.colors.primary};
`;

const Category = styled.span`
  color: ${({theme}) => theme.colors['purple-40']};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.medium};
  letter-spacing: 3px;
`;

const Date = styled.time`
  color: ${({theme}) => theme.colors['gray-40']};
`;

const Description = styled.p`
  color: ${({theme}) => theme.colors['gray-40']};
`;

export default HomePage;
