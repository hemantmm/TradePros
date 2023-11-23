import React from 'react'
import Sidebar from '../Sidebar'
import { Box, Grid } from '@chakra-ui/react'

function AdminCourses() {
  return (
    // <div>Courses</div>
    <>
    <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box>


        </Box>
        <Sidebar />
    </Grid>
    </>
  )
}

export default AdminCourses