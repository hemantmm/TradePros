import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal'

function AdminCourses() {

  const {isOpen,onClose,onOpen}=useDisclosure()
  
  const courses=[{
    _id:"fdasfda",
    title:"react course",
    category:"web dev",
    poster:{
      url:'https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg'
    },
    createdBy:"hemant",
    views:299,
    numOfVideos:12,
  }]

  const courseDetailHandler=(userId)=>{
    console.log(userId);
    onOpen();
  }

  const deleteButtonHandler=(userId)=>{
    console.log(userId);
  }

  const deleteLectureButtonHandler=(courseId,lectureId)=>{
    console.log(lectureId,courseId);
  }

  const addLectureHandler=(e,courseId,title,description,video)=>{
    e.preventDefault()
  }


  return (
    // <div>Users</div>
    <>
    <Grid minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        <Box p={['0','8']} overflowX={'auto'}>
          {/* <Heading */}
          <Heading textTransform={'uppercase'} children='All Users' my='16' textAlign={['center','left']} />

          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All available courses in the database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  courses.map(item=>(
                    <Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>

          <CourseModal isOpen={isOpen} onClose={onClose} id={"fdas"} courseTitle="React course" addLectureHandler={addLectureHandler} deleteButtonHandler={deleteLectureButtonHandler} />
        </Box>
        <Sidebar />
    </Grid>
    </>
  )
}

export default AdminCourses


function Row({item,courseDetailHandler,deleteButtonHandler}){
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>courseDetailHandler(item._id)} variant={'outline'} color='purple.500'>View Lecture</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}