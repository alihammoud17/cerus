import {
  Flex,
  Button,
  Link,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export default function TopNavbar() {
  return (
    <div>
      <Flex justify="space-between" align="center">
        {/* LOGO */}

        <Heading
          alignSelf="center"
          color="#269022"
          fontWeight="bold"
          fontSize="50"
          my="0"
          mx="25"
        >
          cerus
        </Heading>

        {/* Middle tabs */}
        <List
          className="top-links"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          px={0}
        >
          <ListItem className="topnav-item" px={25}>
            <NextLink href="/" passHref>
              <Link className="topnav-link">Services And Memberships</Link>
            </NextLink>
          </ListItem>
          <ListItem className="topnav-item" px={25}>
            <NextLink href="/" passHref>
              <Link className="topnav-link">Sourcing Tools</Link>
            </NextLink>
          </ListItem>
          <ListItem className="topnav-item" px={25}>
            <NextLink href="/" passHref>
              <Link className="topnav-link">Help</Link>
            </NextLink>
          </ListItem>
        </List>

        {/* CTA button */}
        <Button
          w={100}
          h={10}
          borderRadius="30px"
          backgroundColor="#fff"
          className="signin-button"
          mx={50}
          py={0}
        >
          <Text fontWeight={600} fontSize={15}>
            Sign In
          </Text>
        </Button>
      </Flex>
    </div>
  );
}
