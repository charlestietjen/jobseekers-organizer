import { useState } from 'react'
import {
    Input,
    Select,
    SimpleGrid
} from '@chakra-ui/react'

export const Search = ({ data, updateFeed }) => {
    const [selectState, setSelectState] = useState('title')
    const onSearchInputChange = e => {
        const newFeedData = data.filter(arr => {
            const feedField = arr[selectState].toLowerCase()
            return feedField.includes(e.target.value.toLowerCase())
        })
        updateFeed(newFeedData)
    }
    const onSelectChange = e => {
        setSelectState(e.target.value)
    }
    return (
        <SimpleGrid columns={2} spacing={1}>
            <Input placeholder='Search...' onChange={onSearchInputChange} />
            <Select defaultValue="title" placeholder='Select a filter' onChange={onSelectChange}>
                <option value='title'>
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