import { Container, ThemeProvider } from 'theme-ui';
import Prism from '@theme-ui/prism';
import { theme } from '../theme';
import { Footer, Header } from '../components';

const components = {
  pre: ({ children }) => <>{children}</>,
  code: Prism,
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} components={components}>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
