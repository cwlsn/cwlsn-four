import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getCode() {
  const codePath = path.join(process.cwd(), 'content/code-snippets');
  const codeFilePaths = fs.readdirSync(codePath);
  const codeItems = codeFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(codePath, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
      linkPath: filePath.replace('.mdx', ''),
    };
  });

  return codeItems;
}

export { getCode };
