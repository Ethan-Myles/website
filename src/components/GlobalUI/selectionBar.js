import { Link } from 'react-router-dom';
import styles from './selectionbar.module.css';

function SelectionBar() {
  return (
    <div className={styles['selection-bar']}>
      <Link to ="/">Ethan Myles</Link>
      <Link to ="/projects">Projects</Link>
      <Link to ="/university">University</Link>
      <Link to ="/contact">Contact</Link>
      <Link to ="/additional-info">Additional Info</Link>
    </div>
  );
}

export default SelectionBar;