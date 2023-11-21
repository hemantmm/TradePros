import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import profileImage from '../../assets/images/profile.png'
import { Link } from 'react-router-dom'
import {RiSecurePaymentFill} from 'react-icons/ri'
import termsAndCondition from '../../assets/docs/termsAndCondition'

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

const VideoPlayer=()=>{
    <Box>
        {/* <video */}
         {/* <video loop controls controlsList='nodownload nofullscreen noremoteplayback' disablePictureInPicture disableRemotePlayback src={introVideo}>
            </video> */}
    </Box>
}

const TandC=({termsAndCondition})=>(
    <Box>
        <Heading size={'md'} children='Terms & Conditions' textAlign={['center','left']} my='4' />
        <Box h={'sm'} p='4' overflowY={'scroll'}>
            <Text textAlign={['center','left']} letterSpacing={'widest'} fontFamily={'heading'}>
                {termsAndCondition}
            </Text>
            <Heading my='4' size={'xs'} children="Refund only applicable for valid users with payment upto 7 days" />
        </Box>
    </Box>
)

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
            <VideoPlayer />

            <TandC termsAndCondition={termsAndCondition} />

            <HStack my="4" p={'4'}>
                <RiSecurePaymentFill />
                <Heading size={'xs'} fontFamily="sans-serif" textTransform={"uppercase"} children={"Payment is secured by RazorPay"} />
            </HStack>
        </Container>
    </>
  )
}

export default About