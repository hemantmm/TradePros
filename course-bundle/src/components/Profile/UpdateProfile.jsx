import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function UpdateProfile() {
    
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

  return (
    // <div>UpdateProfile</div>
    <Container py='16' minH={'90vh'}>
        <form>
            <Heading children="Update Profile" my='16' textAlign={['center','left']} textTransform={'uppercase'} />
            <VStack spacing={'8'}>
          <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' type={'text'} focusBorderColor='yellow.500' />
          <Input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email@gmail.com' type={'email'} focusBorderColor='yellow.500' />
            <Button w='full' colorScheme='yellow' type='submit'>
                Update
            </Button>
            </VStack>
        </form>
    </Container>
  )
}

export default UpdateProfile