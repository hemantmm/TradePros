import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
// import cursor from '../../../assets/images/cursor.png'

function Dashboard() {
  return (
    // <div>Dashboard</div>
    <>
    <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box>


        </Box>
        <Sidebar />
    </Grid>
    </>
  )
}

export default Dashboard