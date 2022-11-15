import React from 'react';
import {
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Center,
  Button,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { connect } from './config/connection'
import { Search } from './components'

connect()

function App() {
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
            <Search />
          </Center>
        </GridItem>
        <GridItem area='addnew'>
          <Center>
            <Button>
              Add New
            </Button>
          </Center>
        </GridItem>
        <GridItem area='feed'>
          <Center>
            Feed
          </Center>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
