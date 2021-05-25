import NextLink from 'next/link';
import { Link, Heading, Paragraph, Box } from 'theme-ui';
import { PostMeta } from './PostMeta';

function PostPreview({
  title,
  blurb,
  publishedDate,
  topics,
  linkPath,
  readTime,
}) {
  return (
    <Box marginTop={4}>
      <Heading as="h3" variant="postPreview">
        <NextLink href={`/posts/${linkPath}`}>
          <Link href={`/posts/${linkPath}`} variant="postPreview">
            {title}
          </Link>
        </NextLink>
      </Heading>
      <PostMeta
        publishedDate={publishedDate}
        topics={topics}
        readTime={readTime}
      />
      <Paragraph variant="blurb">{blurb}</Paragraph>
    </Box>
  );
}

export { PostPreview };
