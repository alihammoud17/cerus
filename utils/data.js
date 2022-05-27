import bcrypt from 'bcryptjs';

const data = {
  customers: [
    {
      name: 'Ali',
      address: 'Beirut, Lebanon',
      phoneNumber: '+96171408917',
      email: 'ali_hammoud_17@hotmail.com',
      password: '123456',
      profilePic: '/images/profilepic.jpg',
      slug: 'ali-7231',
      isSeller: true,
    },
    {
      name: 'Rami',
      address: 'Beirut, Lebanon',
      phoneNumber: '+96171408918',
      email: 'rami@example.com',
      password: '123456',
      profilePic: '',
      slug: 'rami-1237',
      isSeller: false,
    },
  ],
  products: [
    {
      name: 'Potato',
      minPrice: 0.2,
      maxPrice: 0.8,
      qty: 500,
      sellerName: 'Ali',
      sellerSlug: 'ali-7231',
      image: '/images/potatoes.jpg',
      rate: 4.5,
      numReviews: 35,
    },
    {
      name: 'Carrots',
      minPrice: 0.4,
      maxPrice: 0.9,
      qty: 600,
      sellerName: 'Ali',
      sellerSlug: 'ali-7231',
      image: '/images/carrots.jpg',
      rate: 4.2,
      numReviews: 38,
    },
    {
      name: 'Apples',
      minPrice: 0.5,
      maxPrice: 1.2,
      qty: 400,
      sellerName: 'Issa',
      sellerSlug: 'issa-8543',
      image: '/images/apples.jpg',
      rate: 3.9,
      numReviews: 65,
    },
  ],
};

export default data;
