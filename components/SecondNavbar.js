import { Container, Flex, List, ListItem } from '@chakra-ui/react';

export default function SecondNavbar() {
  return (
    <div className="second-navbar">
      <List display="flex" alignItems="center" justifyContent="space-around">
        <ListItem>Home</ListItem>
        <ListItem>Products</ListItem>
        <ListItem>Profile</ListItem>
        <ListItem>About Us</ListItem>
        <ListItem>ENG - USD</ListItem>
      </List>
    </div>
  );
}
