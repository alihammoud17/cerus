import { Container } from '@chakra-ui/react';
import TopNavbar from './TopNavBar';
import SecondNavbar from './SecondNavbar';

export default function Layout({ children }) {
  return (
    <>
      <TopNavbar />
      <SecondNavbar />
      <Container>{children}</Container>
    </>
  );
}
