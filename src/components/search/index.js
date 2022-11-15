import {
    Input,
    Select,
    SimpleGrid
} from '@chakra-ui/react'

export const Search = () => {
    return (
        <SimpleGrid columns={2} spacing={1}>
            <Input placeholder='Search...' />
            <Select placeholder='Select a filter'>
                <option value='jobtitle'>
                    Job title
                </option>
                <option value='companyname'>
                    Company Name
                </option>
                <option value='contactname'>
                    Contact Name
                </option>
                <option value='contactemail'>
                    Contact Email
                </option>
            </Select>
        </SimpleGrid>
    )
}