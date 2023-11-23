import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'

function CreateCourse() {
  return (
    // <div>CreateCourse</div>
    <>
    <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box>


        </Box>
        <Sidebar />
    </Grid>
    </>
  )
}

export default CreateCourse