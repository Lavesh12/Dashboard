import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='heading'>
        <h1 className='texla'>TEXLA</h1>
        <h1>CULTURE</h1>
      </div>

      <div className='general'>
        <h4>GENERAL</h4>

        <h3 className='dashboard'> 
          <img src="./images/dashboard-logo.png" alt="dashboard-logo" width={"20px"}/>
          <span>Dashboard</span>
         <FontAwesomeIcon icon={faChevronRight} rotation={90} /> 
        </h3>
        
        <h3 className='bank-list'>
          <img src="./images/bank.png" alt="bank" width={"20px"}/>
          <span className='bank1'>Companies</span>
          <FontAwesomeIcon icon={faChevronRight} />        </h3>
        
        <h3 className='bank-list'>
          <img src="./images/bank.png" alt="bank" width={"20px"}/>
          <span className='bank2'>Support & Tickets</span> 
          <FontAwesomeIcon icon={faChevronRight} />        </h3>
        
        <h3 className='bank-list'>
          <img src="./images/bank.png" alt="bank" width={"20px"} />
          <span className='bank3'>User Admins</span>
          <FontAwesomeIcon icon={faChevronRight} />        </h3>
      </div>
    </div>
  );
};

export default SideBar;
