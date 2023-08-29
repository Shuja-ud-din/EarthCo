import React, { useContext } from 'react'
import TitleBar from '../TitleBar'
import ServiceRequests from './ServiceRequests'
import SRlist from './SRlist'
import { Route, Routes } from 'react-router-dom'
import ServiceRequest from './ServiceRequest'
import { RoutingContext } from '../../context/RoutesContext'

const ServiceIndex = () => {

    const { SRroute } = useContext(RoutingContext)

    return (
        <>
            <div className="content-body">
                <Routes>
                    <Route path='' element={<SRlist />} />
                    <Route path={SRroute} element={<ServiceRequest />} />
                </Routes>
            </div>
        </>
    )
}

export default ServiceIndex