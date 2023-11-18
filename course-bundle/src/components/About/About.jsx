import { Avatar, Box, Button, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profileImage from '../../assets/images/profile.png'
import { Link } from 'react-router-dom'

const Founder=()=>(
    <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
        <VStack>
            <Avatar src={profileImage} boxSize={['40','48']} />
            <Text children='Co-Founder' opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children='Hemant M' size={['md','xl']} />
            <Text children={`Hi, I am a full stack developer`} textAlign={['center','left']} />
        </VStack>
    </Stack>
)

const videoPlayer=()=>{
    <Box>
        {/* <video */}
    </Box>
}

function About() {
  return (
    // <div>About</div>
    <>
        <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
            <Heading children='About Us' textAlign={['center','left']} />

            <Founder />

            <Stack m='8' direction={['column','row']} alignItems={'center'}>
                <Text fontFamily={'cursive'} m='8' textAlign={['center','left']}>
                    We are a video Streaming platform with some Stock market related news.
                </Text>

                <Link to='/subscribe'>
                    <Button variant={'ghost'} colorScheme='yellow'>
                        Check out plans
                    </Button>
                </Link>
            </Stack>
        </Container>
    </>
  )
}

export default About