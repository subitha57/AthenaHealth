import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './PatientList.css'
import Sidebar from '../../components/Sidebar';


const PatientInformation: React.FC = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('https://api.preview.platform.athenahealth.com/v1/195900/1/fhir/dstu2/Patient?identifier=null&birthdate=03%2F02%2F1997&name=F&given=null&family=child&_id=1&THIRDPARTYUSERNAME=Gurantor&PATIENTFACINGCALL=true', {
          headers: {
            'Authorization': 'Bearer AWpmv9qcoJvYZkjRnooZGLmvr7AG',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch patient information');
        }
        const data = await response.json();
        setPatients(data.entry.map((entry: any) => entry.resource)); // Assuming data is an object with an 'entry' array containing patient resources
      } catch (error) {
        console.error('Error fetching patient information:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className='patientInfo'>
      <Sidebar/>
      <h2>Patient Information</h2>
      <ul>
        {patients.map((patient: any, index) => (
<li>
<table className='patientinfo'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Birthdate</th>
      <th>Patient Id</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    {patients.map((patient, index) => (
      <tr key={index}>
        <td>{patient.name[0].family}, {patient.name[0].given.join(' ')}</td>
        <td>{patient.birthDate}</td>
        <td>{patient.id}</td>
        <td>{patient.gender}</td>
      </tr>
    ))}
  </tbody>
</table>
</li>
         /* <li key={index}>
            <strong>Name:</strong> {patient.name[0].family}, {patient.name[0].given.join(' ')}<br />
            <strong>Birthdate:</strong> {patient.birthDate}<br />
            <strong>Patient Id:</strong>{patient.id}
            <strong>Gender:</strong>{patient.gender}
           
          </li>*/
        ))}
      </ul>
    </div>
  );
};

export default PatientInformation;
