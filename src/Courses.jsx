import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div>
        <input 
          type="text" 
          placeholder="Search courses..." 
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Open Course</th>
          </tr>
        </thead>
        <tbody>
          {courses.filter(course => course.name.toLowerCase().includes(search.toLowerCase())).map(course => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.price}</td>
              <td><Link to={`/kursevi/${course.id}`}>Open Course</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
