import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import CreateStudent from './Pages/CreateStudent.jsx'
import Terms from './Pages/Terms.jsx'
import ViewStudent from './Pages/ViewStudent.jsx'
import Home from './Pages/Home.jsx'
import InfoStudent from './Pages/InfoStudent.jsx'
import RegisterUser from './Pages/RegisterUser.jsx'
import Login from './Pages/Login.jsx'
import Batches from './Pages/Batches.jsx'
import Enquiry from './Pages/Enquiry.jsx'
import Fees from './Pages/Fees.jsx'
import NewAdmin from './Pages/NewAdmin.jsx'
import Reports from './Pages/Reports.jsx'
import Users from './Pages/Users.jsx'
import Protected from '../Protected.jsx'
// import UpdateStudent from './Pages/UpdateStudent.jsx'
import ViewUser from './Pages/ViewUser.jsx'
import InfoUser from './Pages/InfoUser.jsx'
import CreateEnquiry from './Pages/CreateEnquiry.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/enquiry' element={<Enquiry/>} />
        <Route path='/enquiry/create' element={<CreateEnquiry/>} />
        <Route path='/enquiry/update/:id' element={<CreateEnquiry/>} />
        <Route path='/newAdmin' element={<Protected Component={NewAdmin} />} />
        <Route path='/users' element={<Protected Component={Users} />} />
        <Route path='/fees' element={<Protected Component={Fees} />} />
        <Route path='/reports' element={<Protected Component={Reports} />} />
        <Route path='/batches' element={<Protected Component={Batches} />} />

        <Route path='/student/create' element={<CreateStudent />} />
        <Route path='/student/update/:id' element={<CreateStudent />} />
        <Route path='/student/getstudent' element={<ViewStudent />} />
        <Route path='/getOneStudent/:id' element={<InfoStudent />} />

        <Route path='/user/create' element={<RegisterUser />} />
        <Route path='/user/update/:id' element={<RegisterUser />} />
        <Route path='/user/getuser' element={<ViewUser />} />
        <Route path='/getOneUser/:id' element={<InfoUser />} />
        
        <Route path='/terms' element={<Terms />} />
        {/* <Route path='/student/:id ' element={<UpdateStudent />} /> */}
        <Route path='/home' element={<Protected Component={Home} />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default App