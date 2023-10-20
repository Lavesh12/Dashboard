import React from 'react'
import NavBar from './NavBar'
import KPI from './KPI'
import OnboardedCompanies from './OnboardedCompanies'
import RegionalMetrics from './RegionalMetrics'

const RightPart = () => {
        return (
                <div>
                        <NavBar />
                        <div className='CM'><h4>Client Management</h4></div>
                        <div className='DC'>
                                <h5 className='DB'>Dashboard</h5>
                                <h5 className='CD'>Clients Details</h5>
                        </div>

                        <KPI />
                        <div className='table-metrics'>
                        <OnboardedCompanies/>
                        <RegionalMetrics/>
                        </div>
                </div>
        )
}

export default RightPart