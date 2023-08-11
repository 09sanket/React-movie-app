// AddMovie.js
import React, { useState } from 'react';
import styles from './AddMovie.module.css';


const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: '',
  });

  const submitHandler = event => {
    event.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      openingText: '',
      releaseDate: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label>Title:</label>
      <input
        type="text"
        value={newMovie.title}
        onChange={event => setNewMovie({ ...newMovie, title: event.target.value })}
      />
      <label>Opening Text:</label>
      <input
        type="text"
        value={newMovie.openingText}
        onChange={event => setNewMovie({ ...newMovie, openingText: event.target.value })}
      />
      <label>Release Date:</label>
      <input
        type="text"
        value={newMovie.releaseDate}
        onChange={event => setNewMovie({ ...newMovie, releaseDate: event.target.value })}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
