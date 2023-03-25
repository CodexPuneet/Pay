import {
    Button,
    Flex,
    Heading,
    Image,
    Box,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react'
  import { useNavigate } from "react-router-dom";
  import Footer from "../Components/Footer"
  
  export default function Homepage() {
    const toast = useToast()
    const navigate = useNavigate();
    let data=JSON.parse(localStorage.getItem('paypal'))
    if(!data)
    {
      toast({
        title: 'Warning.',
        description: "You've to Login First" ,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
      navigate("/")
    }
    return (
      <Box>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#0070e1',
                  zIndex: -1,
                }}>
                PayPal
              </Text>
              <br />{' '}
              <Text color={'#002c88'} as={'span'}>
                <i>
              Task{' '}
              <Text color={'#0070e1'} as={'span'}>
                 Planner
                 
              </Text>{' '}
              </i>
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Our App can track all your's bugs and features sprint-wise according to your need. Just start your Tracking now.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
              onClick={()=>navigate("/task")}
                rounded={'full'} 
                bg={'#0070e1'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create 
              </Button>
              <Button rounded={'full'}>How It Works</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://cdn.technologyadvice.com/wp-content/uploads/2019/05/How-Using-JIRA-For-Project-Management-Can-Make-Any-Team-More-Productive-01.png'
            }
          />
        </Flex>
        
      </Stack>
      <Footer/>
      </Box>
    );
  }