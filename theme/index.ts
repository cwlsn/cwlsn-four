import { Theme } from 'theme-ui';
import { lighten } from '@theme-ui/color';
import codeTheme from '@theme-ui/prism/presets/oceanic-next.json';

const theme: Theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: [0, 8],
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
  letterSpacings: {
    eyebrow: '-3%',
  },
  colors: {
    text: '#ffffff',
    background: '#263536',
    primary: '#2BBEC8',
    secondary: '#962BC8',
    muted: 'rgba(255, 255, 255, 0.7)',
    orange: '#F1B928',
    green: '#2BC844',
    blue: '#2B73C8',
    red: '#C82B2B',
    well: 'rgba(0, 0, 0, 0.25)',
    lightWell: 'rgba(255, 255, 255, 0.25)',
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
    card: {
      fontFamily: 'body',
      fontSize: 4,
      fontWeight: 'bold',
      color: 'primary',
    },
    eyebrow: {
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'bold',
      letterSpacing: 'eyebrow',
      textTransform: 'uppercase',
      color: lighten('green', 0.3),
    },
    postPreview: {
      fontSize: 5,
    },
    title: {
      fontSize: 6,
    },
    blurb: {
      color: 'muted',
      fontSize: 3,
    },
    meta: {
      fontSize: 1,
      color: 'muted',
      paddingTop: 2,
      paddingBottom: 3,
    },
  },
  cards: {
    primary: {
      padding: 4,
      borderRadius: 1,
      backgroundColor: 'well',
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
    rss: {
      display: 'block',
      borderRadius: 1,
      textAlign: 'center',
      textDecoration: 'none',
      width: '100%',
      color: 'text',
      marginTop: 4,
      padding: 3,
      fontWeight: 'bold',
      transition: 'all 0.3s ease-in-out',
      backgroundImage: (t) =>
        `linear-gradient(to bottom, ${t.colors.primary}, ${t.colors.blue})`,
      ':hover': {
        backgroundImage: (t) =>
          `linear-gradient(to bottom, ${t.colors.blue}, ${t.colors.secondary})`,
      },
    },
    postPreview: {
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        color: 'green',
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
      flexGrow: 0,
      active: {
        position: 'relative',
        fontSize: 3,
        fontWeight: 'bold',
        paddingY: 2,
        paddingX: 3,
        color: 'text',
        ':hover': {
          color: 'orange',
        },
        ':after': {
          content: '""',
          position: 'absolute',
          top: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40%',
          height: 3,
          borderRadius: 1,
          bg: 'orange',
        },
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
      width: '1240px',
    },
    post: {
      width: '800px',
      p: {
        fontSize: 3,
      },
      h3: {
        fontSize: 5,
        marginBottom: 2,
      },
      h4: {
        fontFamily: 'body',
        fontSize: 3,
        fontWeight: 'bold',
        marginBottom: 2,
        color: 'muted',
      },
    },
  },
  badges: {
    primary: {
      bg: 'blue',
      borderRadius: 1,
      textTransform: 'uppercase',
      marginLeft: 2,
      padding: '1px 6px',
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
      bg: 'well',
      padding: 4,
      borderRadius: 1,
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      ...codeTheme,
      bg: 'well',
    },
    hr: {
      color: 'lightWell',
    },
  },
};

export { theme };
