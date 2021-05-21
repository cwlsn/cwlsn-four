import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from '@danieldietrich/reading-time';

function getPosts() {
  const postsPath = path.join(process.cwd(), 'posts');
  const postFilePaths = fs.readdirSync(postsPath);
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postsPath, filePath));
    const { content, data } = matter(source);
    console.log(readingTime(content).minutes);
    return {
      content,
      data,
      filePath,
      readTime: readingTime(content).minutes,
      linkPath: filePath.replace('.mdx', ''),
    };
  });

  return posts;
}

export { getPosts };
