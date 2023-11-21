import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Subscribe() {
  return (
    // <div>Subscribe</div>
    <>
    <Container h='90vh' p='16'>
        <Heading children="Welcome" my='8' textAlign={'center'} />

        <VStack boxShadow={'lg'} alignItems='stretch' borderRadius={'lg'} spacing='0'>
            <Box bg='yellow.400' p={'4'} css={{borderRadius:'8px 8px 0 0'}}>
                <Text color={'black'} children={`Premium pack at @199`} />
            </Box>

            <Box p='4'>
                <VStack textAlign={'center'} px='8' mt={'4'} spacing={'8'}>
                <Text children={`Join the subscription and get access to my videos`} />
                <Heading size='md' children={`@199 only`} />
                </VStack>

                <Button my='8' w='full' colorScheme={'yellow'}>Buy Now</Button>
            </Box>
            <Box bg='blackAlpha.600' p='4' css={{borderRadius:'0 0 8px 8px'}}>
                <Heading size='sm' color={'white'} textTransform={'uppercase'} children={`100% refund at cancellation`} />
                <Text fontSize={'xs'} color={'white'} children={`*Terms and Conditions Apply`} />
            </Box>
        </VStack>
    </Container>
    </>
  )
}

export default Subscribe