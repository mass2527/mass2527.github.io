import dayjs from 'dayjs';
import Link from 'next/link';
import styled, {css, CSSProperties} from 'styled-components';
import {flexColumn} from 'styles/flex';
import Flex from './Flex';
import Heading from './Heading';

interface BlogPostCardProps {
  slug: string;
  title: string;
  category: string;
  date: Date;
  gradient: CSSProperties['color'][];
}

const BlogPostCard = ({
  slug,
  title,
  category,
  date,
  gradient,
}: BlogPostCardProps) => {
  return (
    <Link key={slug} href={`/article/${slug}`} passHref>
      <Anchor gradient={gradient}>
        <Article>
          <Heading
            css={css`
              font-size: ${({theme}) => theme.fontSizes.large};
              margin-bottom: ${({theme}) => theme.spaces.small};
            `}>
            {title}
          </Heading>
          <Flex justifyContent="space-between">
            <Category>{category}</Category>
            <time
              css={css`
                color: ${({theme}) => theme.colors.secondary};
              `}
              dateTime={date.toString()}>
              {dayjs(date).format('YYYY. MM. DD')}
            </time>
          </Flex>
        </Article>
      </Anchor>
    </Link>
  );
};

const Anchor = styled.a<Pick<BlogPostCardProps, 'gradient'>>`
  background: linear-gradient(to right, ${({gradient}) => gradient.join(',')});
  border-radius: ${({theme}) => theme.radiuses.medium};
  padding: ${({theme}) => theme.spaces['x-small']};
  color: ${({theme}) =>
    theme.isDarkMode ? theme.colors.gray[100] : theme.colors.gray[900]};
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const Article = styled.article`
  ${flexColumn('space-between')}
  height: 100%;
  border-radius: ${({theme}) => theme.radiuses.small};
  padding: ${({theme}) => theme.spaces.medium};
  background-color: ${({theme}) =>
    theme.isDarkMode ? theme.colors.gray[900] : theme.colors.gray[0]};
`;

const Category = styled.span`
  color: ${({theme}) =>
    theme.isDarkMode ? theme.colors.gray[200] : theme.colors.gray[700]};
  font-size: ${({theme}) => theme.fontSizes.small};
  font-weight: ${({theme}) => theme.fontWeights.medium};
  letter-spacing: 3px;
`;

export default BlogPostCard;
