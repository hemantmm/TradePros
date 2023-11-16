import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from 'react-icons/ti'
import {DiGithub} from 'react-icons/di'

function Footer() {
  return (
    // <div>Footer</div>
    <>
    <Box padding={'4'} bg='blackAlpha.900' minH={'01vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width='full'>
                <Heading children="All Rights Reserved" color={'white'} />
                <Heading children="@Hemant M" color={'yellow.400'} fontFamily={'body'} size={'sm'} />
            </VStack>

            <HStack spacing={['2','10']} justifyContent='center' color={'white'} fontSize='45'>
                <a href='https://youtube.com/hemant' target={'_blank'} rel="noreferrer">
                    <TiSocialYoutubeCircular />
                </a>

                <a href='https://instagram.com/hemant' target={'_blank'}>
                    <TiSocialInstagramCircular />
                </a>

                <a href='https://github.com/hemantmm' target={'_blank'}>
                    <DiGithub />
                </a>
            </HStack>
        </Stack>
    </Box>
    </>
  )
}

export default Footer