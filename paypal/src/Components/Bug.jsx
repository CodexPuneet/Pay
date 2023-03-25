import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Box,
    SimpleGrid,
    Stack,
    Center,
    useColorModeValue,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import Pending from './Pending'
  import Progress from './Progress'
  import Sucess from './Sucess'
  import axios from 'axios';

const Bug = () => {


  return (
    <Box>
   <Flex bg="#002c88" >
   <Sucess />
  
        <Progress />
        <Pending />   
      
    </Flex>
    </Box>
  )
}

export default Bug