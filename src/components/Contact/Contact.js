
import styles from './contact.module.css'

function Contact() {

  const emailClick = () => {
    window.location.href = 'mailto:contact@ethanmyles.com';
  };

  const linkedinClick = () => {
    window.open('https://www.linkedin.com/in/ethan-myles-9177951bb/', '_blank');    
  };
  
  return (
    <>
      <title>Contact</title>
      <div className={styles['contact-text']}>
        <h2>You can reach out to me via email or Linkedin</h2>
      </div>
      <div className={styles['contact-container']}>
        <button className={`${styles.contact} ${styles['contact-shadow-drop']} ${styles['contact-shadow-drop--black']} ${styles['contact-email']}`} onClick={emailClick}>contact@ethanmyles.com</button>
      </div>
      <div className={styles['contact-container']}>
        <button className={`${styles.contact} ${styles['contact-shadow-drop']} ${styles['contact-shadow-drop--black']} ${styles['contact-Linkedin']} ${styles['center-contact-text']}`} onClick={linkedinClick}>in</button>
      </div>
    </>
  );
}

export default Contact;