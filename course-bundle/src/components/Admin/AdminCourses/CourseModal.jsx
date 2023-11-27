import { Box, Button, Grid, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

    const
function CourseModal({isOpen,onClose,id,deleteButtonHandler,addLectureHandler,courseTitle,lectures=[],}) {

    // const courseTitle="React course"

  return (
    // <div>CourseModal</div>
    <>
    <Modal isOpen={isOpen} size={'full'}>
        <ModalOverlay />

        <ModalContent>
            <ModalHeader>{courseTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody p='16'>
                <Grid templateColumns={['1fr','3fr 1fr']}>
                    <Box px={['0','16']}>
                        <Box my='5'>
                            <Heading children={courseTitle} />
                            <Heading children={`#${id}`} size={'sm'} opacity={'0.4'} />
                        </Box>

                        <Heading children={"Lecures"} size={'lg'} />
                        <VideoCard title="React intro" description='this is intro' num={1} lectureId="asdfd" courseId={id} deleteButtonHandler={deleteButtonHandler} />
                    </Box>
                </Grid>

            </ModalBody>
        </ModalContent>

    </Modal>
    </>
  )
}

export default CourseModal

function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler}){
    return(
        <Stack direction={['column','row']} my="8" borderRadius={'lg'} p={['4','8']} justifyContent={['flex-start','space-between']} boxShadow={"0 0 10px rgba(107,70,193,0.5)"}>
            <Box>
                <Heading size={'sm'} children={`#${num} ${title}`} />
                <Text children={description} />
            </Box>
            <Button color={'purple.600'} onClick={()=>deleteButtonHandler(courseId,lectureId)}>
                <RiDeleteBin7Fill />
            </Button>
        </Stack>
    )
}