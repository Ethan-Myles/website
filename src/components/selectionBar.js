import React from 'react';
import styles from './selectionbar.module.css';

function SelectionBar() {
  return (
    <div className={styles['selection-bar']}>
      <a href="/">Ethan Myles</a>
      <a href="/projects">Projects</a>
      <a href="/university">University</a>
      <a href="/contact">Contact</a>
      <a href="/additional-info">Additional Info</a>
    </div>
  );
}

export default SelectionBar;