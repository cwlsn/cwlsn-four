import relativeDate from 'tiny-relative-date';
import { Badge, Paragraph, Text } from 'theme-ui';

function PostMeta({ topics, publishedDate, readTime }) {
  return (
    <Paragraph variant="meta" sx={{ display: 'flex', alignItems: 'center' }}>
      {relativeDate(publishedDate)}
      <Text paddingX={2}>&middot;</Text>
      {readTime} min read
      {topics.map((topic) => (
        <Badge as="span" key={topic}>
          {topic}
        </Badge>
      ))}
    </Paragraph>
  );
}

export { PostMeta };
