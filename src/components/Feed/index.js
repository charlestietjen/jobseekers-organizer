import {
    Stack,
    Box,
    Text,
    SimpleGrid,
    Container,
} from '@chakra-ui/react'

export const Feed = ( { displayData }) => {
    return (
        <Stack>
            {displayData.map(element => (
                <Stack gap={2} backgroundColor={'whiteAlpha.50'} p={3} w='40vw' h='fit-content' borderRadius={8} boxShadow='dark-lg' key={Math.floor(Math.random() * 65535)}>
                    <SimpleGrid columns={3}>
                        <Stack align='center'>
                            <Text as='b'>Title</Text>
                            <Text>{element.title}</Text>
                        </Stack>
                        <Stack align='center'>
                            <Text as='b'>Company</Text>
                            <Text>{element.companyname}</Text>
                        </Stack>
                        <Stack align='center'>
                            <Text as='b'>Date Applied</Text>
                            <Text>{element.dateapplied.$M + 1}/{element.dateapplied.$D}/{element.dateapplied.$y}</Text>
                        </Stack>
                    </SimpleGrid>
                    <SimpleGrid columns={2}>
                        <Stack align='center'>
                            <Text as='b'>Contact</Text>
                            <Text>{element.contactname}</Text>
                        </Stack>
                        <Stack align='center'>
                            <Text as='b'>Contact Email</Text>
                            <Text>{element.contactemail}</Text>
                        </Stack>
                    </SimpleGrid>
                    <Stack>
                        <Text as='b'>Cover Letter</Text>
                        <Container>
                            <Stack>{element.coverletter.split("\n").map(element => (
                                <Text key={Math.floor(Math.random() * 65535)}>
                                    {element}
                                </Text>
                            ))}
                            </Stack>
                        </Container>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    )
}