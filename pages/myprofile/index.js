import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../../utils/Store';
import Error from '../../components/common/ErrorPage';
import Navbar from '../../components/common/Navbar';
import { Heading } from '@chakra-ui/react';

function MyProfile() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      setTimeout(() => router.push('/'), 3000);
    }
  });

  return userInfo ? (
    <Navbar title={`${userInfo.name}'s Profile`}>
      <Heading>{`${userInfo.name}'s Profile`}</Heading>
    </Navbar>
  ) : (
    <Error
      headline={'Not Signed In'}
      text={'Please Sign In. Getting Back to Home page...'}
    />
  );
}

export default MyProfile;
