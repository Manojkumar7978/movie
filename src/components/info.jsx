import React from 'react'
import { Box, Text, chakra, Image } from '@chakra-ui/react'

export default function Info({ data }) {
    return (
        <Box
            display='flex'
        >
            <Box display='grid' gap={3}
                w='80%'
            >
                <Text><chakra.span
                    fontWeight='bold'
                >Genre:</chakra.span> {data.Genre}</Text>
                <Text><chakra.span
                    fontWeight='bold'
                >Plot:</chakra.span> {data.Plot}</Text>
                <Text><chakra.span
                    fontWeight='bold'
                >Released on:</chakra.span> {data.Released}</Text>
                <Text><chakra.span
                    fontWeight='bold'
                >IMDB Rating:</chakra.span> {data.imdbRating}</Text>
                <Text><chakra.span
                    fontWeight='bold'
                >Total Votes:</chakra.span> {data.imdbVotes}</Text>
            </Box>
            <Box
                overFlow='hidden'
                w='100px' h='250px'>
                <Image src={data.Poster}
                    borderRadius='10px'
                />

            </Box>
        </Box>
    )
}
// Genre,Plot,Poster,Released,imdbRating,imdbVotes