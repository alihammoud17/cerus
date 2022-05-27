import { Button, Container, Flex, Input, Select } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';
import HeaderLayout from '../common/HeaderLayout';

export default function HomeLayout({ children }) {
  return (
    <>
      <HeaderLayout title="Home">
        <Flex
          visibility={['hidden', 'hidden', 'hidden', 'visible', 'visible']}
          align="center"
          justify="center"
        >
          <Select
            borderRadius="30px 0 0 30px"
            className="top-filter-select"
            placeholder="Products"
            borderColor="#269002"
          ></Select>
          <Input
            borderRadius="0"
            className="top-search-bar"
            placeholder="Search Items..."
            borderColor="#269002"
            bgColor="#f1f1f1"
            color="#000"
          ></Input>
          <Button
            className="search-button"
            borderColor="#269002"
            bgColor="#269002"
            color="#fff"
            borderRadius="0 30px 30px 0"
          >
            <SearchIcon></SearchIcon>
          </Button>
        </Flex>
      </HeaderLayout>
      <Container maxW="80rem">{children}</Container>
    </>
  );
}
