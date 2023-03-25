import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { useState } from 'react';
   import axios from 'axios';
   import { useToast } from '@chakra-ui/react'
   import { useNavigate } from "react-router-dom";
   import Footer from "../Components/Footer"
  
  export default function Login() {
    const toast = useToast()
    const navigate = useNavigate();
    const [data, setData]=useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setData({
            ...data,
            [name]:value
        })
       
    }
    const handleSubmit=()=>{
        axios.post('https://fine-tan-panther-wrap.cyclic.app/user/login',data)
        .then((res)=>{
            if(res.data.token){
                localStorage.setItem('paypal', JSON.stringify(res))
            toast({
            title: 'Account created.',
            description: res.data.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate("/homepage");
    }})
        .catch((err)=>{console.log(err)})
    }
    return (
      <Box>     <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in Fast</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              you are one step away from <Link color={'blue.400'}>PayPal</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' placeholder='Email' onChange={handleChange}  />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  name='password' placeholder='Password' onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button
                  onClick={handleSubmit}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'} >
                  Become Family? <Text color={'blue.400'}> <Link  to="/register">Register Here</Link></Text> 
                </Text>
              </Stack>
          </Box>
        </Stack>
       
      </Flex>
      <Footer />
      </Box>
 
    );
  }