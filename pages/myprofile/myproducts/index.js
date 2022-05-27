import Navbar from '../../../components/common/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../../utils/Store';
import Cookies from 'js-cookie';
import data from '../../../utils/data';
import { useRouter } from 'next/router';
import {
  Button,
  Flex,
  Heading,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
} from '@chakra-ui/react';
import Error from '../../../components/common/ErrorPage';
import Card from '../../../components/common/Card';
import useMounted from '../../../utils/Mount';

export default function MyProducts() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [products, setProducts] = useState([]);
  const mounted = useMounted();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [productName, setProductName] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!userInfo) {
      setTimeout(() => router.push('/'), 3000);
    }
    setProducts(data.products);
  }, [userInfo, router]);

  const addProductHandler = (e) => {
    e.preventDefault();
    setProducts([
      ...data.products,
      {
        name: productName,
        minPrice: minPrice,
        maxPrice: maxPrice,
        qty: qty,
        sellerName: userInfo.name,
        sellerSlug: userInfo.slug,
        image: image,
        rate: 0,
        numReviews: 0,
      },
    ]);

    console.log({
      name: productName,
      minPrice: minPrice,
      maxPrice: maxPrice,
      qty: qty,
      sellerName: userInfo.name,
      sellerSlug: userInfo.slug,
      image: image,
      rate: 0,
      numReviews: 0,
    });
  };

  return mounted && userInfo ? (
    <Navbar title={'Products'}>
      <Flex>
        <Heading>{`${userInfo.name}'s Products`}</Heading>
        <>
          <Button onClick={onOpen}>Add Product</Button>

          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Product</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={addProductHandler}>
                <ModalBody>
                  <FormControl isRequired>
                    <FormLabel>Product Name</FormLabel>
                    <Input
                      type={'text'}
                      name={'product-name'}
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Minimum Unit Price</FormLabel>
                    <Input
                      type={'number'}
                      name={'min-price'}
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Maximum Unit Price</FormLabel>
                    <Input
                      type={'number'}
                      name={'max-price'}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Min Quantity</FormLabel>
                    <Input
                      type={'number'}
                      name={'qty'}
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Image URL</FormLabel>
                    <Input
                      type={'text'}
                      name={'image'}
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button type={'submit'}>Add Product</Button>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </>
      </Flex>
      <SimpleGrid columns={[1, 2, 3, 4]}>
        {products
          .filter((product) => product.sellerName === userInfo.name)
          .map((data) => {
            return (
              <Card
                key={data.name}
                name={data.name}
                imageURL={data.image}
                minPrice={data.minPrice}
                maxPrice={data.maxPrice}
                rating={data.rate}
                numReviews={data.numReviews}
              />
            );
          })}
      </SimpleGrid>
    </Navbar>
  ) : (
    <Error
      headline={'Not Signed In'}
      text={'Please Sign In. Getting Back to Home page...'}
    />
  );
}
