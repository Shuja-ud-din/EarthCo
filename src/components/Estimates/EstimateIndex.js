import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import EstimateList from './EstimateList'
import EstimateIDopen from './EstimateIDopen'
import { RoutingContext } from '../../context/RoutesContext'
import AddEstimateForm from './AddEstimateForm'

const EstimateIndex = () => {

    const { estimateRoute } = useContext(RoutingContext);

    return (
        <>
            <div className="content-body" style={{ paddingBottom: '1px' }}>
                <Routes>
                    <Route path='' element={<EstimateList />} />
                    <Route path={estimateRoute} element={<EstimateIDopen />} />
                    <Route path='Add-Estimate' element={<AddEstimateForm />} />
                </Routes>
            </div>
        </>
    )
}

export default EstimateIndex