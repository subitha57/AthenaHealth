import './PatientInfoHandouts.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Sidebar from '../../components/Sidebar';

const PatientInfoTable: React.FC = () => {
 
  const [patientInfo, setPatientInfo] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
       
        const response = await axios.get('https://api.preview.platform.athenahealth.com/v1/195900/reference/order/patientinfo?searchvalue=cardio', {
          headers: {
            Authorization: `Bearer AWpmv9qcoJvYZkjRnooZGLmvr7AG`, 
          },
        });

       
        setPatientInfo(response.data);
        setIsLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); 
      }
    };

    
    fetchData();
  }, []);

  
  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
            <Sidebar/>
        <h3>Encounter Patient Information Handouts</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Ordertypeid</th>
              <th>Name</th>
              
            </tr>
          </thead>
          <tbody>
            {patientInfo.map((patient, index) => (
              <tr key={index}>
                <td>{patient.ordertypeid}</td> 
                <td>{patient.name}</td> 
               
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
   
  );
};

export default PatientInfoTable;
