import styles from './ethanmyles.module.css'

function EthanMyles() {
  return(
  <>
    <title>Ethan Myles</title>
    <div className={styles['welcome-text']}>
      <h2>Hi there, I'm Ethan Myles</h2>
    </div>
    <div className={styles['welcome-paragraph']}>
      <p>Computer Science graduate from the University of Liverpool.
        I'm driven by my passion to solve problems.
        Now equipped with a year of industry experience as a student software developer.
        I'm continously learning and improving, and excited to now build upon the knowledge that I have gained.
      </p>
    </div>
    <hr size="1"></hr>
    <div className={styles['ethanmyles-heading']}>
      <p>Experience</p>
    </div>
    <div className="container">
      <div className="box">The Lead Agency</div>
      <div className="box">Computer Science graduate from the University of Liverpool.
        I'm driven by my passion to solve problems.
        Now equipped with a year of industry experience as a student software developer.
        I'm continously learning and improving, and excited to now build upon the knowledge that I have gained.
      </div>
      <div className="box">September 2022 - August 2023</div>
    </div>
    <div className="container">
      <div className="box">The Lead Agency</div>
      <div className="box">Computer Science graduate from the University of Liverpool.
        I'm driven by my passion to solve problems.
        Now equipped with a year of industry experience as a student software developer.
        I'm continously learning and improving, and excited to now build upon the knowledge that I have gained.
      </div>
      <div className="box">September 2022 - August 2023</div>
    </div>
    <div className="container">
      <div className="box">The Lead Agency</div>
      <div className="box">Computer Science graduate from the University of Liverpool.
        I'm driven by my passion to solve problems.
        Now equipped with a year of industry experience as a student software developer.
        I'm continously learning and improving, and excited to now build upon the knowledge that I have gained.
      </div>
      <div className="box">September 2022 - August 2023</div>
    </div>
    <hr size="1"></hr>
    <div className={styles['ethanmyles-heading']}>
      <p>Skills</p>
    </div>
  </>
  )
}

export default EthanMyles;