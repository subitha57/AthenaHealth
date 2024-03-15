import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.tsx';
import PatientInfoHandouts from './pages/patient/PatientInfoHandouts'
import PatientList from './pages/patient/PatientList.tsx';
import PatientListOptional from './pages/patient/PatientListOptional.tsx';
import SearchTypes from './pages/patient/SearchTypes.tsx';
import PatientInformation from './pages/patient/PatientInformation.tsx';
import FrontPage from './components/FrontPage.tsx';

function App() {
  
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/PatientInfoHandouts' element={<PatientInfoHandouts/>}/>
          <Route path='/PatientList' element={<PatientList/>}/>
          <Route path='/PatientListOptional' element={<PatientListOptional/>}/>
          <Route path='/SearchTypes' element={<SearchTypes/>}/>
          <Route path='/PatientInformation' element={<PatientInformation/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
