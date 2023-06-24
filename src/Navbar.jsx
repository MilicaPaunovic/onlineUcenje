import React from 'react';
import axios from 'axios';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate =  useNavigate();
  const handleLogout = () => {
    const token = sessionStorage.getItem('token');

    axios.post('http://127.0.0.1:8000/api/logout', {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      sessionStorage.removeItem('token');
      alert("You have been logged out.");
      navigate('/login')
      
    })
    .catch(error => {
      console.log(error.response.data);
      alert("Logout failed. Please try again.");
    });
  };

  return (
    <div className="navbar-container">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
