import React from 'react'
import { Link } from 'react-router-dom';
//The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child. menu/lists...
import { Stack } from '@mui/material'

import Muscular from '../assets/images/Muscular.jpg'
const Navbar = () => {
  return (
    <Stack direction='row' justifyContent="space-around" sx={{ gap: {sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent: 'none'}} px='20px'>
      <Link>
       <img src={Muscular} alt='logo' style={{width: '48px', height:'48px', margin: '0 20px'}} />
      </Link>
      <Stack
      direction='row'
      gap='40px'
      fontSize='24px'
      alignItems='flex-end'
      >
        <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}} >Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar

// sm stlying on smaller devices
// xs extra small devices
// px padding x-axis