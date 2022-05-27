import { Link, List, ListItem, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import Layout from '../common/HeaderLayout';

export default function TopNavbar() {
  return (
    <>
      <Layout title="Supplier">
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
      </Layout>
      <Image
        w="100%"
        h="100%"
        src="images/mainImage.png"
        alt="Cerus Products"
      ></Image>
    </>
  );
}
