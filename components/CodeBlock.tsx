import Highlight, { defaultProps } from 'prism-react-renderer';
// eslint-disable-next-line import/no-extraneous-dependencies
import theme from 'prism-react-renderer/themes/oceanicNext';
import { Box } from 'theme-ui';

function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, '');

  return (
    <Box
      bg="well"
      sx={{
        fontSize: 2,
        padding: 4,
        paddingBottom: 3,
        borderRadius: 1,
        position: 'relative',
        maxWidth: '100%',
      }}
    >
      <Box
        padding={2}
        sx={{
          fontSize: 1,
          color: 'muted',
          position: 'absolute',
          top: 0,
          right: 3,
          textTransform: 'uppercase',
          bg: 'well',
          fontWeight: 'bold',
        }}
      >
        {language}
      </Box>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={theme}
      >
        {({
          className: _className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={_className}
            style={{
              ...style,
              backgroundColor: 'transparent',
              margin: 0,
              padding: 0,
            }}
          >
            {tokens.map((line, i) => (
              <Box
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                {...getLineProps({ line, key: i })}
              >
                {line.map((token, key) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
}

export { CodeBlock };
