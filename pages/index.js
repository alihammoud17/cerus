import React from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import data from '../utils/data';
import HomeLayout from '../components/home/HomeLayout';
import Card from '../components/common/Card';
import Navbar from '../components/common/Navbar';
import useMounted from '../utils/Mount';

export default function App() {
  const mounted = useMounted();

  return (
    mounted && (
      <Navbar title={'Home'}>
        <Heading m={15}>For You</Heading>
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {data.products.map(function (data) {
            // const { id, product, summary, longLine } = data;
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
    )
  );
}
