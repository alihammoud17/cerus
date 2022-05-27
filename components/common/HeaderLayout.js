import { Flex, Button, Link, Heading, Text, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import Head from 'next/head';
import React from 'react';

export default function HeaderLayout({ title, children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>{`Cerus - ${title}`}</title>
        <meta
          name="description"
          content="An online marketplace where you can buy and sell agricultural products at the click of a button."
        ></meta>
        <meta
          name="keywords"
          content="Cerus, Cerus Agriculture, Cerus Products, agricultural, Cerus online shop, buy, sell, wholesale, retail, Cerus Lebanon"
        ></meta>
      </Head>
      <Flex justify="space-between" align="center">
        {/* LOGO */}

        <Heading
          alignSelf="center"
          color="#269022"
          fontWeight="bold"
          fontSize="50"
          my="0"
          mx="25"
          className="logo"
        >
          <NextLink href="/" passHref>
            <Link className="logo-link">cerus</Link>
          </NextLink>
        </Heading>

        {/* Middle tabs */}
        <>{children}</>

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
    </>
  );
}
