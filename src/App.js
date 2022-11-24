import React, { useEffect, useState } from 'react';
import { idbPromise } from './config/connection';
import {
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Search, AddNew, Feed } from './components'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState([])
  const [feedData, setFeedData] = useState([])
  useEffect(() => {
    idbPromise('applications', 'get').then(applicationData => {
      setData(applicationData)
      setFeedData(applicationData)
    })
  }, [])

  const updateFeed = (newFeedData) => {
    if (newFeedData.length > 0){
      setFeedData(newFeedData)
    }
    else {
      setFeedData([])
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <Grid templateAreas={`"header header"
                            "search addnew"
                            "feed feed"`}
        templateRows={'15vh 10vh 75vh'}
        templateColumns={'75vw 25vw'}
        h='100vh'
        spacing='1'
      >
        <GridItem area='header'>
          <Center>
            <Heading>Jobseeker's Organizer</Heading>
          </Center>
        </GridItem>
        <GridItem area='search'>
          <Center>
            <Search data={data} updateFeed={updateFeed} />
          </Center>
        </GridItem>
        <GridItem area='addnew'>
          <Center>
            <Button onClick={onOpen}>
              Add New
            </Button>
          </Center>
        </GridItem>
        <GridItem area='feed'>
          <Center>
              <Feed displayData={feedData} />
          </Center>
        </GridItem>
      </Grid>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add an Entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNew close={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
