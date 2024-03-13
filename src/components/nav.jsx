import { Box, Heading, Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'

//fucntion to fetch the data from OMDB api 

const fetchMovies=async (s)=>{
try {
    let data=await axios.get(`https://www.omdbapi.com/?s=${s}&apikey=62af1d39`)
    // console.log(data.data.Search)
    return data.data.Search
} catch (error) {
    return(error)
}
}

export default function Nav({ s, setS,setData }) {

    //to fetch data from the api to get result by click search button

    const handelClick=()=>{
        // console.log(s)
        fetchMovies(s)
        .then((data)=>{
            if(typeof data=='object'){
                setData([...data])
            }else{
                setData('error')
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }   
    

    return (
        <Box boxShadow={'md'} border='1px solid green' p={5}
            display='flex'
            // alignItems='center'
            justifyContent='space-between'
        >
            {/* title logo  */}
            <Heading textAlign='left'>Movies</Heading>

            {/* search input and button  */}
            <Box
                display='flex'
                alignItmes='center'
                gap={5}
            >
                <Input
                    borderColor='blue'
                    placeHolder='Enter movie name to search'
                    type='text' maxW='500px' borderRadius='5px'
                    onChange={(e) => {
                        setS(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
                <Button variant={'outline'}
                    colorScheme='blue'
                    onClick={handelClick}
                >Search</Button>
            </Box>

        </Box>
    )
}
