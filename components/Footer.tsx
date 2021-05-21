import { Box, Link } from 'theme-ui';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="well"
      padding={4}
      marginTop={4}
      sx={{
        textAlign: 'center',
      }}
    >
      &copy; Content property of Connor Wilson {currentYear}. Code available
      (attribution is nice){' '}
      <Link
        href="https://github.com/cwlsn/cwlsn-four"
        target="blank"
        variant="footer"
      >
        cwlsn/cwlsn-four
      </Link>
      .
    </Box>
  );
}

export { Footer };
