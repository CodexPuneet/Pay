import React from 'react'
import {BsFillCalendarDayFill,BsFileEarmarkSpreadsheetFill,BsBugFill} from "react-icons/bs"
import {BiHistory} from "react-icons/bi"
import {MdOutlineFeaturedPlayList} from "react-icons/md"
import TCalendar from "../Components/Calender";
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


const Task = () => {
  const [value, onChange] = React.useState(new Date());
  const [calender, setCalender]=React.useState(false)

  const handleCalendar=()=>{

  }


console.log(calender)
  return (
    <Box d='flex' >
        <Box
          borderRight="1px"
          display={{ base: 'none', md: 'block' }}
          borderRightColor={useColorModeValue('gray.200', 'gray.700')}
         bg={useColorModeValue('#0070e1', '#002c88')}
         h='full'
         w={40}
         pos="fixed"
         color="white"
         >
          <Center>
          <SimpleGrid gap="50px"  w="100px" mt={"80px"}>
            
          <Center>
           <BsFillCalendarDayFill onClick={()=>{setCalender(!calender)}} fontSize="40px" />
           </Center>

           

            <Center>
           <BsBugFill fontSize="40px"/>
           </Center>

          <Center>
           <MdOutlineFeaturedPlayList fontSize="40px"/>
           </Center>

           

           <Center>
           <BsFileEarmarkSpreadsheetFill fontSize="40px"/>
           </Center>

          

           <Center>
           <BiHistory fontSize="40px"/>
           </Center>
          </SimpleGrid>
          </Center>

        </Box>
        <Box  ml="160px"  bg='red' border='10px solid black'>
          {calender ? <TCalendar  /> : "" }
        </Box>
        
    </Box>
  )
}

export default Task