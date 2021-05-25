import Head from 'next/head';
import { Box, Flex, Heading } from 'theme-ui';
import { CodePreview } from '../../components';
import { getCode } from '../../lib';

type Frontmatter = {
  isPublished: boolean;
  publishedDate: number;
  title: string;
  blurb: string;
  category: string;
};

interface Code {
  content: string;
  data: Frontmatter;
  filePath: string;
  linkPath: string;
}

interface CodeProps {
  code: Code[];
}

function AllCode({ code }: CodeProps) {
  return (
    <>
      <Head>
        <title>
          Connor Wilson | Lead Software Developer | All Code Snippets
        </title>
      </Head>
      <Flex>
        <Box marginRight={4}>
          <Heading as="h2" variant="eyebrow">
            All Code Snippets
          </Heading>
          {code.map((item) => (
            <CodePreview
              key={item.filePath}
              publishedDate={item.data.publishedDate}
              title={item.data.title}
              blurb={item.data.blurb}
              category={item.data.category}
              linkPath={item.linkPath}
            />
          ))}
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      code: getCode(),
    },
  };
}

export default AllCode;
