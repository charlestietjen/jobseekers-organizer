import { useState } from 'react'
import {
    Box,
    Input,
    Textarea,
    FormControl,
    FormLabel,
    Text,
    Button,
    SimpleGrid,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import { idbPromise } from '../../config/connection'

export const AddNew = ({ close }) => {
    const [ formData, setFormData ] = useState({
        title: '',
        companyname: '',
        contactname: '',
        contactemail: '',
        dateapplied: dayjs(),
        jobboardname: '',
        coverletter: '',
    })

    const handleFormChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleMonthChange = e => {
        const newDate = dayjs(formData.dateapplied.month(e -1))
        setFormData({ ...formData, dateapplied: newDate })
    }

    const handleDateChange = e => {
        const newDate = dayjs(formData.dateapplied.date(e))
        setFormData({ ...formData, dateapplied: newDate })
    }

    const handleYearChange = e => {
        const newDate = dayjs(formData.dateapplied.year(e))
        setFormData({ ...formData, dateapplied: newDate })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        idbPromise('applications', 'put', {...formData}).then(e => {
            close()
        })
    }

    return (
        <FormControl onChange={handleFormChange}>
            <FormLabel>Job title</FormLabel>
            <Input name='title' />
            <FormLabel>Company name</FormLabel>
            <Input name='companyname' />
            <FormLabel>Contact name</FormLabel>
            <Input name='contactname' />
            <FormLabel>Contact email address</FormLabel>
            <Input name='contactemail' />
            <FormLabel>Date applied</FormLabel>
            <SimpleGrid columns={3}>
                <NumberInput  maxW={20} min={1} max={12} defaultValue={new Date().getMonth() + 1} name='monthapplied' onChange={handleMonthChange} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <NumberInput maxW={20} min={1} max={31} defaultValue={new Date().getDate()} name='dayapplied' onChange={handleDateChange} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <NumberInput maxW={24} min={2022} defaultValue={new Date().getFullYear()} name='yearapplied' onChange={handleYearChange} >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </SimpleGrid>
            <FormLabel>Job board/website</FormLabel>
            <Input name='jobboardname' />
            <FormLabel>Cover letter</FormLabel>
            <Textarea name='coverletter' />
            <Button my={2} onClick={handleSubmit}>Submit</Button>
        </FormControl>
    )
}