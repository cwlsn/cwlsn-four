import relativeDate from 'tiny-relative-date';
import { Paragraph, Text } from 'theme-ui';

function CodeMeta({ category, publishedDate }) {
  return (
    <Paragraph variant="meta">
      {relativeDate(publishedDate)}
      <Text paddingX={2}>&middot;</Text>
      {category}
    </Paragraph>
  );
}

export { CodeMeta };
