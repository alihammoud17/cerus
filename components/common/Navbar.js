import React, { useContext } from 'react';
import Head from 'next/head';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import LogIn from './LoginModal';
import { Store } from '../../utils/Store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Links = ['Home', 'Products', 'About Us', 'Team', 'Contact Us'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Simple({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const router = useRouter();

  const logoutClickHandler = () => {
    // setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    // Cookies.remove('cartItems');
    router.push('/');
  };

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
      <Box
        // position={'fixed'}
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading
                alignSelf="center"
                color="#269022"
                fontWeight="bold"
                fontSize="50"
                my="0"
                mx="25"
                className="logo"
              >
                <Link href="/" className="logo-link">
                  cerus
                </Link>
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {userInfo ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={userInfo.profilePic} />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={(e) => {
                      router.push('/myprofile');
                    }}
                  >
                    Profile
                  </MenuItem>
                  {userInfo.isSeller === true ? (
                    <>
                      <MenuItem
                        onClick={(e) => {
                          router.push('/myprofile/myproducts');
                        }}
                      >
                        My Products
                      </MenuItem>
                      <MenuItem>Gold MemberShip</MenuItem>
                    </>
                  ) : (
                    <MenuItem>Become A Member</MenuItem>
                  )}

                  <MenuDivider />
                  <MenuItem onClick={logoutClickHandler}>Log Out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <LogIn />
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>{children}</Box>
    </>
  );
}
