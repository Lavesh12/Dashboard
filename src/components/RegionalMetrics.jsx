import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

const RegionalMetrics = () => {
  return (
    <div>
      <div className="metrics-header">
        <div className="header-title">
          <div>Regional Metrics</div>
        </div>
      </div>
      <div className="metrics-chart">
        <div className="chart-inner">
          <img src="./images/circle.png" alt="" width={130} />
        </div>
      </div>
      <div className="regions">
        <div className="region">
          <div className="region-name">
            <div>East</div>
            <div className="region-color1"></div>
          </div>
        </div>
        <div className="region">
          <div className="region-name">
            <div>North</div>
            <div className="region-color2"></div>
          </div>
        </div>
        <div className="region">
          <div className="region-name">
            <div>South</div>
            <div className="region-color3"></div>
          </div>
        </div>
        <div className="region">
          <div className="region-name">
            <div>West</div>
            <div className="region-color4"></div>
          </div>
        </div>
      </div>
      <div className="client-info">
        <div className="client">

          <div className="client-icon"></div>

          <div className="client-details1">
            <div className="client-name">20 Clients</div>
            <div className="client-amount">
              <div className="currency-icon"><FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#1939b7",}} /></div>₹500000
            </div>
          </div>
        </div>

        <div className="client-details2">
          <div className="client-name">5 Clients</div>
          <div className="client-amount">
            <div className="currency-icon"><FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#1939b7",}} /></div>₹100000
          </div>
        </div>

        <div className="client-details3">
          <div className="client-name">6 Clients</div>
          <div className="client-amount">
            <div className="currency-icon"><FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#1939b7",}} /></div>₹250000
          </div>
        </div>

        <div className="client-details4">
          <div className="client-name">1 Clients</div>
          <div className="client-amount">
            <div className="currency-icon"><FontAwesomeIcon icon={faArrowTrendUp} style={{color: "#1939b7",}} /></div>₹20000
          </div>
        </div>


      </div>
    </div>
  );
}

export default RegionalMetrics;
