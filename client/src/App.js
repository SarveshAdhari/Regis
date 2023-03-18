import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SharedLayout, AllJobs, MyApplications, Profile } from './pages/dashboard'
import { Register,Error } from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
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
