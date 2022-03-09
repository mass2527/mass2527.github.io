import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import Section from 'components/Section';
import styled, {css} from 'styled-components';
import {media} from 'styles/media';
import Link from 'next/link';
import {getAllArticles} from 'lib/data';
import Heading from 'components/Heading';
import Flex from 'components/Flex';
import dayjs from 'dayjs';

interface HomePageProps {
  articles: {
    slug: string;
    title: string;
    category: string;
    date: Date;
    description: string;
    content: string;
  }[];
}

const HomePage: NextPage<HomePageProps> = ({articles}) => {
  return (
    <div>
      <Head>
        <title>kim.dongho</title>
        <meta
          name="description"
          content="Frontend Engineer 김동호입니다. 그때그때 흥미를 느끼는 컨셉에 대해 공유하거나 나만 알기 아까운 해외 시니어 개발자들의 글을 번역해서 제공합니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section>
        <Grid>
          {articles.map((article) => (
            <Link href={`/article/${article.slug}`} key={article.slug}>
              <Anchor>
                <article>
                  <Flex
                    justifyContent="space-between"
                    css={css`
                      margin-bottom: ${({theme}) => theme.spaces.large};
                    `}
                  >
                    <Category>{article.category}</Category>
                    <Date>{dayjs(article.date).format('YYYY. MM. DD')}</Date>
                  </Flex>
                  <Heading
                    css={css`
                      margin-bottom: ${({theme}) => theme.spaces.small};
                    `}
                  >
                    {article.title}
                  </Heading>
                  <Description>{article.description}</Description>
                </article>
              </Anchor>
            </Link>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles([
    'title',
    'date',
    'slug',
    'category',
    'description',
  ]);

  return {
    props: {articles},
  };
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px;

  ${media.lessThan('desktop')`
  grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan('tablet')`
  grid-template-columns: repeat(1, 1fr);
  `}
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
