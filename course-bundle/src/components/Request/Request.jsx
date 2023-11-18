import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Request() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [course,setCourse]=useState('')

  return (
    // <div>Contact</div>
    <>
        <Container h='92vh'>
            <VStack h='full' justifyContent={'center'} spacing='16'>
                <Heading children='Request Course' />

                <form style={{width:'100%'}}>

                <Box my={'4'}>
          <FormLabel htmlFor='name' children='Name' />
          <Input required id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' type={'text'} focusBorderColor='yellow.500' />
          </Box>


          <Box my={'4'}>
          <FormLabel htmlFor='email' children='Email address' />
          <Input required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='hello@gmail.com' type={'email'} focusBorderColor='yellow.500' />
          </Box>

          <Box my={'4'}>
          <FormLabel htmlFor='course' children='Course' />
          <Textarea required id='course' value={course} onChange={(e)=>setCourse(e.target.value)} placeholder='Courses' focusBorderColor='yellow.500' />
          </Box>

          <Button my='4' colorScheme='yellow' type='submit'>Send mail</Button>

          <Box my='4'>
            Available Course! <Link to='/courses'>
              <Button colorScheme='yellow' variant={'link'}>Click</Button>
              {' '} here
            </Link>
          </Box>

        </form>

            </VStack>
        </Container>
    </>
  )
}

export default Request