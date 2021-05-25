import Head from 'next/head';
import { Box, Flex, Heading } from 'theme-ui';
import { getPosts } from '../../lib';
import { FeedWell, PostPreview } from '../../components';

type Frontmatter = {
  isPublished: boolean;
  publishedDate: number;
  title: string;
  topics: string[];
  blurb: string;
};

interface Post {
  content: string;
  data: Frontmatter;
  filePath: string;
  linkPath: string;
  readTime: number;
}

interface PostsProps {
  posts: Post[];
}

function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Connor Wilson | Lead Software Developer | All Posts</title>
      </Head>
      <Flex>
        <Box marginRight={4}>
          <Heading as="h2" variant="eyebrow">
            All Posts
          </Heading>
          {posts.map((post) => (
            <PostPreview
              key={post.filePath}
              title={post.data.title}
              blurb={post.data.blurb}
              publishedDate={post.data.publishedDate}
              topics={post.data.topics}
              linkPath={post.linkPath}
              readTime={post.readTime}
            />
          ))}
        </Box>
        <FeedWell />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts(),
    },
  };
}

export default Posts;
