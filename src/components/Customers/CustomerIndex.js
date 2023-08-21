import React from 'react'
import CustomersTable from './CustomersTable'
import TitleBar from '../TitleBar'
import { Route, Routes } from 'react-router-dom'
import AddCutomer from './AddCutomer'

const CustomerIndex = () => {

    const icon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.986 14.0673C7.4407 14.0673 4.41309 14.6034 4.41309 16.7501C4.41309 18.8969 7.4215 19.4521 10.986 19.4521C14.5313 19.4521 17.5581 18.9152 17.5581 16.7693C17.5581 14.6234 14.5505 14.0673 10.986 14.0673Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M10.986 11.0054C13.3126 11.0054 15.1983 9.11881 15.1983 6.79223C15.1983 4.46564 13.3126 2.57993 10.986 2.57993C8.65944 2.57993 6.77285 4.46564 6.77285 6.79223C6.76499 9.11096 8.63849 10.9975 10.9563 11.0054H10.986Z" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <>
            <div className="content-body" style={{ paddingBottom: '1px' }}>
                <TitleBar icon={icon} title='Customers' />
                <Routes>
                    <Route path='' element={<CustomersTable />} />
                    <Route path='Add-Customer' element={<AddCutomer />} />
                </Routes>
            </div>
        </>
    )
}

export default CustomerIndex