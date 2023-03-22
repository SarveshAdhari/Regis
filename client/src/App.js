import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SharedLayout, AllJobs, MyApplications, Profile } from './pages/dashboard'
import { Register,Error, ProtectedRoutes } from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><SharedLayout /></ProtectedRoutes>}>
          <Route index element={<AllJobs />}/>
          <Route path="/myapplications" element={<MyApplications />}/>
          <Route path="/profile" element={<Profile />}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
