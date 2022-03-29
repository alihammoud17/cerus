import Head from 'next/head';
import { Container } from '@chakra-ui/react';
import TopNavbar from './TopNavBar';
import SecondNavbar from './SecondNavbar';

export default function Layout({ title, children }) {
  return (
    <div>
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
      <TopNavbar />
      <SecondNavbar />
      <Container>{children}</Container>
    </div>
  );
}
