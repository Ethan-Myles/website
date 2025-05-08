import React, { useState, useEffect } from 'react';
import styles from './theme.module.css';
const sunImage = '/images/sun.jpg';
const moonImage = '/images/moon.png';

function Theme() {
  const [isSun, setIsSun] = useState(true);

  const toggleTheme = () => {
    setIsSun(prevState => !prevState);
  };

  useEffect(() => {
    if (isSun) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isSun]);

  return (
    <div className={styles.themeContainer}>
      <button className={styles.themeButton} onClick={toggleTheme}>
        <img src={isSun ? sunImage : moonImage} alt={isSun ? 'Sun' : 'Moon'}/>
      </button>
    </div>
  );
}

export default Theme;