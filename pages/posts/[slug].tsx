import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from '@danieldietrich/reading-time';
import { Container, Divider, Heading } from 'theme-ui';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { FeedWell, Footer, PostMeta } from '../../components';

function PostBySlug({ frontmatter, source, readTime }) {
  return (
    <>
      <Container variant="post">
        <Heading as="h2" variant="title">
          {frontmatter.title}
        </Heading>
        <PostMeta
          publishedDate={frontmatter.publishedDate}
          topics={frontmatter.topics}
          readTime={readTime}
        />
        <Divider />
        <MDXRemote {...source} components={{ Footer }} />
        <FeedWell />
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const postsPath = path.join(process.cwd(), 'posts');
  const postFilePaths = fs.readdirSync(postsPath);
  const paths = postFilePaths.map((filePath) => ({
    params: { slug: filePath.replace('.mdx', '') },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const fileName = `${context.params.slug}.mdx`;
  const postPath = path.join(process.cwd(), 'posts', fileName);
  const postContent = fs.readFileSync(postPath);

  const { content, data } = matter(postContent);

  return {
    props: {
      source: await serialize(content),
      frontmatter: data,
      readTime: readingTime(content).minutes,
    },
  };
}

export default PostBySlug;
