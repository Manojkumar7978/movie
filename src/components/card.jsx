import React, { useEffect, useState } from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import {
    Modal, useDisclosure, ModalBody, ModalOverlay, ModalHeader, ModalCloseButton,
    ModalContent
} from '@chakra-ui/react'
import axios from 'axios'
import Info from './info'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/react'
//to fetch all info about any perticular movie

const fetchData = async (id) => {
    try {
        let data = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=62af1d39`)
        return data.data
    } catch (error) {
        return error
    }
}

export default function Card({ el }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [data, setData] = useState()

    const handelClick = () => {
        fetchData(el.imdbID)
            .then((result) => {
                setData({ ...result })
            })
    }

    return (
        <Box overFlow='hidden' maxW='300px' key={el.imdbID}>
            <Image w='100%'
                h='100%'
                borderRadius='10px'
                src={el.Poster} />
            <Text
                fontSize='lg'
                w='80%'
                noOfLines={2}
                cursor='pointer'
                onClick={() => {
                    onOpen()
                    handelClick()
                }}
            >{`${el.Title} (${el.Year})`}</Text>

            {/* modal for showing all information about a particular movie  */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{el.Title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            typeof data === 'object' ? <Info data={data} /> : <Text>
                                <Box padding='6' bg='white'>
                                    <SkeletonCircle size='10' />
                                    <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                                </Box>

                            </Text>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}

