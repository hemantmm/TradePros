import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function ChangePassword() {

    const [oldPassword,setOldPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')

  return (
    // <div>ChangePassword</div>
    <>
    <Container py='16' minH={'90vh'}>
        <form>
            <Heading children="Update Password" my='16' textAlign={['center','left']} textTransform={'uppercase'} />
            <VStack spacing={'8'}>
          <Input required value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} placeholder='Old Pasword' type={'password'} focusBorderColor='yellow.500' />
          <Input required value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} placeholder='New Pasword' type={'password'} focusBorderColor='yellow.500' />
            <Button w='full' colorScheme='yellow' type='submit'>
                Update
            </Button>
            </VStack>
        </form>
    </Container>
    </>
  )
}

export default ChangePassword