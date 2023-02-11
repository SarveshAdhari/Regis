import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { SharedLayout, AllJobs } from './pages/dashboard'
import { Register,Error } from './pages'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AllJobs />}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
