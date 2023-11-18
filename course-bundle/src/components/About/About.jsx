import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

function About() {
  return (
    // <div>About</div>
    <>
        <Container maxW={'container.lg'} padding='16' boxShadow={'lg'}>
            <Heading children='About Us' textAlign={['center','left']} />
        </Container>
    </>
  )
}

export default About