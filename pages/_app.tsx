import { Container, ThemeProvider } from 'theme-ui';
import { theme } from '../theme';
import { Footer, Header } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
