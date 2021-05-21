import Head from 'next/head';
import { Box, Flex, Heading } from 'theme-ui';
import { FeedWell, PostPreview } from '../components';
import { getPosts } from '../lib';

function Home({ latestPosts }) {
  return (
    <>
      <Head>
        <title>Connor Wilson | Lead Software Developer</title>
      </Head>
      <Flex>
        <Box marginRight={4}>
          <Heading as="h3" variant="eyebrow">
            Latest Posts
          </Heading>
          {latestPosts.map((post) => (
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
      latestPosts: getPosts(),
    },
  };
}

export default Home;
