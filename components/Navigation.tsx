import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, NavLink } from 'theme-ui';

function Navigation() {
  const { asPath } = useRouter();

  return (
    <Box as="nav">
      <NextLink href="/about">
        <NavLink
          href="/about"
          variant={asPath.includes('/about') ? 'nav.active' : 'nav'}
        >
          About
        </NavLink>
      </NextLink>
      <NextLink href="/posts">
        <NavLink
          href="/posts"
          variant={asPath.includes('/posts') ? 'nav.active' : 'nav'}
        >
          Posts
        </NavLink>
      </NextLink>
      <NextLink href="/code">
        <NavLink
          href="/code"
          variant={asPath.includes('/code') ? 'nav.active' : 'nav'}
        >
          Code
        </NavLink>
      </NextLink>
      <NextLink href="/contact">
        <NavLink
          href="/contact"
          variant={asPath.includes('/contact') ? 'nav.active' : 'nav'}
        >
          Contact
        </NavLink>
      </NextLink>
    </Box>
  );
}

export { Navigation };
