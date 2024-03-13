import { Box ,Image,Text} from '@chakra-ui/react'
import React from 'react'
import Card from './card'

export default function Content({data,setData}) {
    console.log(data!=='error')
  return (
    <Box p={10} 
    display='flex'
    flexWrap='wrap'
    justifyContent='space-between'
    rowGap={20}
    >
        {
            data!='error' ? data.map((el,ind)=>{
                // movie card 
                 return <Card el={el} />
            })
            :
            <>
            <Text fontSize='lg' color='red'>No result found !</Text>
            </>
        }

    </Box>
  )
}
