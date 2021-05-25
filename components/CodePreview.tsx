import NextLink from 'next/link';
import { Box, Heading, Link, Paragraph } from 'theme-ui';
import { CodeMeta } from './CodeMeta';

function CodePreview({ publishedDate, title, blurb, category, linkPath }) {
  return (
    <Box marginTop={4}>
      <Heading as="h3" variant="postPreview">
        <NextLink href={`/code/${linkPath}`}>
          <Link href={`/code/${linkPath}`} variant="postPreview">
            {title}
          </Link>
        </NextLink>
      </Heading>
      <CodeMeta category={category} publishedDate={publishedDate} />
      <Paragraph variant="blurb">{blurb}</Paragraph>
    </Box>
  );
}

export { CodePreview };
