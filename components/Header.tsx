import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useReducedMotion } from 'framer-motion';
import { Box, Container, Flex, Heading, Link } from 'theme-ui';
import { keyframes } from '@emotion/react';
import { MorseLine } from './MorseLine';
import { Navigation } from './Navigation';

const colorSlide = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

function Header() {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const getMorseWord = () => {
    if (asPath.includes('about')) return 'about';
    if (asPath.includes('posts')) return 'posts';
    if (asPath.includes('code')) return 'code';
    if (asPath.includes('contact')) return 'hello';

    return 'cwlsn';
  };

  return (
    <Flex as="header">
      <Box
        marginBottom={3}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '6px',
          background: (t) =>
            shouldReduceMotion
              ? t.colors.primary
              : `linear-gradient(270deg, ${t.colors.primary}, ${t.colors.secondary}, ${t.colors.orange}, ${t.colors.green}, ${t.colors.blue})`,
          backgroundSize: '1000% 1000%',
          animation: `${colorSlide} 30s ease infinite`,
        }}
      />
      <Container paddingY={4}>
        <Flex>
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
