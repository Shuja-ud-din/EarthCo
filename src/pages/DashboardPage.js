import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../components/DashBoard'
import HeaderExp from '../components/Header/HeaderExp'
import SideBar from '../components/SideBar/SideBar'
import Footer from '../components/Footer'
import CustomerIndex from '../components/Customers/CustomerIndex'
import EstimateIndex from '../components/Estimates/EstimateIndex'
import ServiceIndex from '../components/ServiceRequest/ServiceIndex'
import IrrigationIndex from '../components/Irrigation/IrrigationIndex'
import CustomersTable from '../components/Customers/CustomersTable'
import AddCutomer from '../components/Customers/AddCutomer'
import Irrigationlist from '../components/Irrigation/Irrigationlist'
import IrrigationForm from '../components/Irrigation/IrrigationForm'
import Audit from '../components/Reports/Audit'
import PunchListIndex from '../components/PunchLists/PunchListIndex'
import PunchlistPreview from '../components/PunchLists/PunchlistPreview'
import SummaryReport from '../components/Reports/SummaryReport'
import ProposalSummary from '../components/Reports/ProposalSummary'
import WeeklyReportIndex from '../components/Reports/WeeklyReport/WeeklyReportIndex'
import WeeklyReportlist from '../components/Reports/WeeklyReport/WeeklyReportlist'
import WeeklyReport from '../components/Reports/WeeklyReport/WeeklyReport'
import AddWRform from '../components/Reports/WeeklyReport/AddWRform'
import LandscapeIndex from '../components/Landscape/LandscapeIndex'
import Landscapelist from '../components/Landscape/Landscapelist'
import LandscapeForm from '../components/Landscape/LandscapeForm'
import Landscape from '../components/Landscape/Landscape'
import ServiceRequest from '../components/ServiceRequest/ServiceRequest'
import { RoutingContext } from '../context/RoutesContext'
import SRlist from '../components/ServiceRequest/SRlist'
import EstimateList from '../components/Estimates/EstimateList'
import EstimateIDopen from '../components/Estimates/EstimateIDopen'
import AddEstimateForm from '../components/Estimates/AddEstimateForm'

const DashboardPage = () => {

    const { SRroute, estimateRoute } = useContext(RoutingContext)

    return (
        <>
            <HeaderExp />
            <SideBar />

            <Routes>
                <Route path='' element={<DashBoard />} />
                <Route path='/Customers/*' element={<CustomerIndex />} >
                    <Route path='' element={<CustomersTable />} />
                    <Route path='Add-Customer' element={<AddCutomer />} />
                </Route>
                <Route path='Estimates' element={<EstimateIndex />} >
                    <Route path='' element={<EstimateList />} />
                    <Route path='Add-Estimate' element={<AddEstimateForm />} />
                    <Route path={estimateRoute} element={<EstimateIDopen />} />
                </Route>
                <Route path='Service-Requests' element={<ServiceIndex />} >
                    <Route path='' element={<SRlist />} />
                    <Route path={SRroute} element={<ServiceRequest />} />
                </Route>
                <Route path='Irrigation' element={<IrrigationIndex />} >
                    <Route path='' element={<Irrigationlist />} />
                    <Route path='Add-Irrigation' element={<IrrigationForm />} />
                </Route>
                <Route path='Irrigation/Audit-Report' element={<Audit />} />
                <Route path='Punchlist' element={<PunchListIndex />} />
                <Route path='Irrigation/PunchlistPreview' element={<PunchlistPreview />} />
                <Route path='SummaryReport' element={<SummaryReport />} />
                <Route path='ProposalSummary' element={<ProposalSummary />} />
                <Route path='Weekly-Reports' element={<WeeklyReportIndex />}>
                    <Route path='' element={<WeeklyReportlist />} />
                    <Route path='WeeklyReport' element={<WeeklyReport />} />
                    <Route path='Add-Weekly-Report' element={<AddWRform />} />
                </Route>
                <Route path='Landscape' element={<LandscapeIndex />}>
                    <Route path='' element={<Landscapelist />} />
                    <Route path='Add-Landscape' element={<LandscapeForm />} />
                </Route>
                <Route path='Landscape/PunchList-Report' element={<Landscape />} />
            </Routes>
            <Footer />
        </>
    )
}

export default DashboardPage
