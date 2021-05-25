import { Box, Flex } from 'theme-ui';
import { motion } from 'framer-motion';

const morseMap = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
};

const colors = ['primary', 'secondary', 'orange', 'green', 'blue'];

function Char({ short = true, bg }) {
  return (
    <Box
      bg={bg}
      marginRight="4px"
      sx={{
        width: short ? '6px' : '32px',
        height: '6px',
        borderRadius: '6px',
      }}
    />
  );
}

function Letter({ bg, alpha }) {
  const morseCode = morseMap[alpha];
  if (!morseCode) {
    return null;
  }

  return (
    <Flex marginRight={1}>
      {morseCode.split('').map((char, index) => (
        // valid usage of array index here
        // eslint-disable-next-line react/no-array-index-key
        <Char key={`${char}-${index}`} short={char === '.'} bg={bg} />
      ))}
    </Flex>
  );
}

function MorseLine({ word }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Flex title={word}>
        {word.split('').map((char, index) => (
          <Letter
            // valid usage of array index here
            // eslint-disable-next-line react/no-array-index-key
            key={`${char}-${index}`}
            alpha={char.toUpperCase()}
            bg={colors[index % colors.length]}
          />
        ))}
      </Flex>
    </motion.div>
  );
}

export { MorseLine };
