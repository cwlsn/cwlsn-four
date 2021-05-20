import { Theme } from 'theme-ui';

const theme: Theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: '"Alice", Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#ffffff',
    background: '#263536',
    primary: '#2BBEC8',
    secondary: '#962BC8',
    muted: 'rgba(255, 255, 255, 0.7)',
    orange: '#C89C2B',
    green: '#2BC844',
    blue: '#2B73C8',
    well: 'rgba(0, 0, 0, 0.25)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    logo: {
      fontFamily: 'heading',
      fontSize: 7,
      lineHeight: 1,
      marginBottom: 4,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      backgroundColor: 'background',
      boxShadow: '0 0 24px rgba(0, 0, 0, 0.45)',
    },
  },
  links: {
    logo: {
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        color: 'primary',
      },
    },
    nav: {
      color: 'muted',
      fontSize: 3,
      fontWeight: 'body',
      paddingY: 2,
      paddingX: 3,
      ':hover': {
        color: 'orange',
      },
    },
    footer: {
      color: 'green',
      ':hover': {
        color: 'orange',
      },
    },
  },
  layout: {
    container: {
      width: '1040px',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      backgroundColor: 'background',
      color: 'text',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
  },
};

export { theme };
