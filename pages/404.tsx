import Head from 'next/head';
import { Heading, Image, Paragraph } from 'theme-ui';

function FoOhFo() {
  return (
    <>
      <Head>
        <title>Connor Wilson | Lead Software Developer | Page Not Found</title>
      </Head>
      <Heading as="h2" marginTop={5} marginBottom={2} sx={{ fontSize: 6 }}>
        I can&apos;t find that...
      </Heading>
      <Paragraph color="muted">
        There are very few pages here, so here&apos;s a consolation cat.
      </Paragraph>
      <Image
        src="/undraw-cat.svg"
        alt="Page not found, 404"
        sx={{
          marginX: 'auto',
          marginTop: 5,
          marginBottom: 6,
          display: 'block',
        }}
      />
    </>
  );
}

export default FoOhFo;
