import NextLink from 'next/link';
import { Flex, NavLink } from 'theme-ui';

function Navigation() {
  return (
    <Flex as="nav">
      <NextLink href="/about">
        <NavLink href="/about">About</NavLink>
      </NextLink>
      <NextLink href="/posts">
        <NavLink href="/posts">Posts</NavLink>
      </NextLink>
      <NextLink href="/code">
        <NavLink href="/code">Code</NavLink>
      </NextLink>
    </Flex>
  );
}

export { Navigation };
