import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const KPI = () => {
    return (
        <>
            <div className='row'>
                <div className='KPI'>
                    <h4>Key Performance Indicator</h4>

                    <div className='CCR'>

                        <div className='CRR'>
                            <h5>Client Retention Rate</h5>
                            <div>55%</div>
                        </div>

                        <div className='CS'>
                            <h5>Client Satisfaction</h5>
                            <div>55%</div>
                        </div>

                        <div className='RG'>
                            <h5>Revenue Generated</h5>
                            <div>55%</div>
                        </div>

                    </div>

                </div>


                <div className='KPI'>
                    <h4>Companies Status</h4>
                    <div className='CCR'>
                        <div className='CRR'>
                            <h5>Total</h5>
                            <div>20</div>
                        </div>

                        <div className='RG'>
                            <h5>Active</h5>
                            <div>15</div>
                        </div>

                        <div className='CS'>
                            <h5>New</h5>
                            <div>3</div>
                        </div>

                    </div>
                </div>




                <div className='KPI'>
                    <h4>Active User Base</h4>
                    <div className='User-Color'>
                        <div className='user'>
                            <div className='AppUser'><FontAwesomeIcon icon={faCircle} style={{ color: "#1939b7", }} />&nbsp; 89% App User</div>
                            <div className='WebUser'><FontAwesomeIcon icon={faCircle} style={{color: "#36b37e",}} />&nbsp; 11% Web User</div>
                        </div>

                        <div className='color'>
                            <div className='blue'></div>
                            <div className='green'></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default KPI 