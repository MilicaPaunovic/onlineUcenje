 
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
function App() {
  return (
    <Router>
    <div>
        <Navbar />
        <Routes>
         
          
          <Route path="/login" element={   <Login></Login>} />
          <Route path="/register" element={   <Register></Register>} />

          
        </Routes>
        </div>
    </Router>
 
  );
}

export default App;
