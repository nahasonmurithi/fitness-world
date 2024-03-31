import React, {useState} from 'react';
import { Box } from '@mui/material';

import HomeBanner from '../components/HomeBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home