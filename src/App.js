 
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Navbar from './Navbar';
import Courses from './Courses';
import Course from './Course';
function App() {
  return (
    <Router>
    
        <Navbar></Navbar>
        <Routes>
         
          
          <Route path="/login" element={   <Login></Login>} />
          <Route path="/register" element={   <Register></Register>} />
          <Route path="/kursevi" element={   <Courses></Courses>} />
          <Route path="/kursevi/:id" element={   <Course></Course>} />

          
        </Routes>
        
    </Router>
 
  );
}

export default App;
