import React from 'react'
import StaticComps from '../components/StaticComps'
import ServiceRequests from '../components/ServiceRequest/ServiceRequests'
import TitleBar from '../components/TitleBar'
import Footer from '../components/Footer'

const ServiceRequestsPage = () => {

    const icon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.64111 13.5497L9.38482 9.9837L12.5145 12.4421L15.1995 8.97684" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="18.3291" cy="3.85021" rx="1.76201" ry="1.76201" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.6808 2.86012H7.01867C4.25818 2.86012 2.54651 4.81512 2.54651 7.57561V14.9845C2.54651 17.7449 4.22462 19.6915 7.01867 19.6915H14.9058C17.6663 19.6915 19.3779 17.7449 19.3779 14.9845V8.53213" stroke="#888888" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


    return (
        <>
            <StaticComps />
            <div className="content-body">
                <TitleBar icon={icon} title='Service Requests' />
                <ServiceRequests />
            </div>
            <Footer />
        </>
    )
}

export default ServiceRequestsPage
