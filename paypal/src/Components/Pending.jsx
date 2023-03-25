import React, {  useRef, useState } from 'react'
import { Box,Button,Grid,Flex,Center } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md';

const Pending = () => {
    const [list, setList]=useState([])
    const dragItem = useRef();
    const dragOverItem = useRef();
    const handlebug=()=>{
        let data=prompt("Please Regiter Bugs ", "Bug ");
if(list.length<5)
{
    setList([...list, data])
}
  else{
    alert('Bugs List Full')
  }      
        
    }
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
      };
     
      const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
      };
     
      const drop = (e) => {
        const copyListItems = [...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems);
      };

      const handelDelete = (id) => {
        let data = list.filter((el) => list.indexOf(el) !== id);
    
        setList(data);
      };
  
  return (
    <Box   w="30%" m='20px' color="#ffff" bg="#ffff">
     <Box bg="#6778f5" m='10px' p="10px" onClick={handlebug}>Pending Bugs</Box>
     <Box bg="#f65251" m='10px' p="10px" >Critical Severity</Box>
     <Grid display="flex" flexDirection="column">
     {
        list.map((el,index)=>{
            return <Center> <Box  onDragStart={(el) => dragStart(el, index)}
            onDragEnter={(el) => dragEnter(el, index)}
            onDragEnd={drop}
            key={index}
            draggable m='10px' p="10px 30px" bg="#f65251">{el}</Box><Button onClick={()=>handelDelete(index)} bg="#f65251"><MdDelete/></Button></Center>
        })
     }
</Grid>
    </Box>
  )
}

export default Pending