import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCSS={
    cursor:'pointer',
    marginLeft:'-5%',
    width:'110%',
    border:'none',
    height:'100%',
    color:'#ECC94B',
    backgroundColor:'white',
}

const fileUploadStyle={
    '&::file-seclector-button':fileUploadCSS
}

function Register() {

  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const [imagePrev,setImagePrev]=useState('')
  const [image,setImage]=useState('')

  const changeImageHandler=(e)=>{
    const file=e.target.files[0]
    const reader=new FileReader();

    reader.readAsDataURL(file)

    reader.onloadend=()=>{
        setImagePrev(reader.result)
        setImage(file)
    }
  }

  return (
    <>
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing='16'>
        <Heading textTransform={'uppercase'} children={"Register your Account"} />

        <form style={{width:'100%'}}>

            <Box my='4' display={'flex'} justifyContent={'center'}>
                {/* <Avatar size={'0.5xl'} /> */}
                <Avatar src={imagePrev} />
            </Box>

        <Box my={'4'}>
          <FormLabel htmlFor='name' children='Name' />
          <Input required id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='name' type={'text'} focusBorderColor='yellow.500' />
          </Box>

          <Box my={'4'}>
          <FormLabel htmlFor='email' children='Email address' />
          <Input required id='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='hello@gmail.com' type={'email'} focusBorderColor='yellow.500' />
          </Box>

          <Box my={'4'}>
          <FormLabel htmlFor='password' children='Password' />
          <Input required id='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='pasword' type={'password'} focusBorderColor='yellow.500' />
          </Box>

          <Box my={'4'}>
          <FormLabel htmlFor='chooseAvatar' children='chooseAvatar' />
          <Input accept='image/*' required id='chooseAvatar' type={'file'} focusBorderColor='yellow.500' onChange={changeImageHandler} css={fileUploadStyle} />
          </Box>

          <Button my='4' colorScheme='yellow' type='submit'>Sign Up</Button>

          <Box my='4'>
            Already Signed Up? <Link to='/login'>
              <Button colorScheme='yellow' variant={'link'}>Login</Button>
              {' '} here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
    </>
  )
}
export default Register