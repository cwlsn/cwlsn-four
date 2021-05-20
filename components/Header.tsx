import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Flex, Heading, Link } from 'theme-ui';
import { MorseLine } from './MorseLine';
import { Navigation } from './Navigation';

function Header() {
  const { asPath } = useRouter();

  const getMorseWord = () => {
    if (asPath.includes('about')) return 'about';
    if (asPath.includes('posts')) return 'posts';
    if (asPath.includes('code')) return 'code';

    return 'cwlsn';
  };

  return (
    <Flex as="header">
      <Box
        bg="primary"
        marginBottom={3}
        sx={{ position: 'absolute', width: '100%', height: '6px' }}
      />
      <Container paddingY={4}>
        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          <Box marginRight="auto">
            <Heading as="h1" variant="logo">
              <NextLink href="/">
                <Link href="/" variant="logo">
                  Connor Wilson
                </Link>
              </NextLink>
            </Heading>
            <MorseLine word={getMorseWord()} />
          </Box>
          <Navigation />
        </Flex>
      </Container>
    </Flex>
  );
}

export { Header };
