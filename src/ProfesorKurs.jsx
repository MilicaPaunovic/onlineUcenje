import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Course.css';

function ProfesorKurs() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [newLesson, setNewLesson] = useState({ title: '', content: '', order: 0 });
  const [updatedLesson, setUpdatedLesson] = useState({ title: '', content: '', order: 0 });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/courses/${id}/lessons`)
      .then(response => {
        setLessons(response.data.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, [id]);

  const createLesson = lessonData => {
    axios.post(`http://127.0.0.1:8000/api/courses/${id}/lessons`, lessonData)
      .then(response => {
        setLessons(prevLessons => [...prevLessons, response.data.data]);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const updateLesson = (lessonId, lessonData) => {
    axios.put(`http://127.0.0.1:8000/api/lessons/${lessonId}`, lessonData)
      .then(response => {
        setLessons(prevLessons => prevLessons.map(lesson => {
          return lesson.id === lessonId ? response.data.data : lesson;
        }));
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const deleteLesson = lessonId => {
    axios.delete(`http://127.0.0.1:8000/api/lessons/${lessonId}`)
      .then(() => {
        setLessons(prevLessons => prevLessons.filter(lesson => lesson.id !== lessonId));
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewLesson({...newLesson, [name]: value});
    setUpdatedLesson({...updatedLesson, [name]: value});
  };

  const handleCreateSubmit = event => {
    event.preventDefault();
    createLesson(newLesson);
    setNewLesson({ title: '', content: '', order: 0 });
  };

  const handleUpdateSubmit = (event, lessonId) => {
    event.preventDefault();
    updateLesson(lessonId, updatedLesson);
    setUpdatedLesson({ title: '', content: '', order: 0 });
  };

  return (
    <div className="course-container">
      <h2>Lessons</h2>

      <h3>Create Lesson</h3>
      <form onSubmit={handleCreateSubmit}>
        <input type="text" name="title" value={newLesson.title} onChange={handleInputChange} required />
        <textarea name="content" value={newLesson.content} onChange={handleInputChange} required />
        <input type="number" name="order" value={newLesson.order} onChange={handleInputChange} required />
        <button type="submit">Create</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map(lesson => (
            <tr key={lesson.id}>
              <td>{lesson.title}</td>
              <td>{lesson.content}</td>
              <td>{lesson.order}</td>
              <td>
 
                <button><Link to={`/update/${lesson.id}`}>Update </Link></button>
                <button onClick={() => deleteLesson(lesson.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfesorKurs;
