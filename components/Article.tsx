import styled, {css} from 'styled-components';
import Flex from 'components/Flex';
import Heading from 'components/Heading';

interface ArticleProps {
  articleId: string;
}

function Article({articleId}: ArticleProps) {
  return (
    <article>
      <Flex
        justifyContent="space-between"
        css={css`
          margin-bottom: ${({theme}) => theme.spaces.large};
        `}
      >
        <Category>Category</Category>
        <Date>Date</Date>
      </Flex>
      <Heading
        css={css`
          margin-bottom: ${({theme}) => theme.spaces.small};
        `}
      >
        Heading
      </Heading>
      <Description>Description</Description>
    </article>
  );
}

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

export default Article;
