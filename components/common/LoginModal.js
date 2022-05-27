import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import data from '../../utils/data';
import React, { useState, useContext, useEffect } from 'react';
import { Store } from '../../utils/Store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function LogIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userInfo) router.push('/');
  }, [userInfo, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data.customers.filter((c) => c.email === email)[0];
    console.log(user);
    if (user && password === user.password) {
      dispatch({ type: 'USER_LOGIN', payload: user });
      Cookies.set('userInfo', JSON.stringify(user));
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type={'email'}
                  name={'email'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type={'password'}
                  name={'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type={'submit'}>Log In</Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
