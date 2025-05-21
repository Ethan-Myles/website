import styles from './ethanmyles.module.css'

function EthanMyles() {
  return(
  <>
    <title>Ethan Myles</title>
    <hr size="1"></hr>
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
      <div className="box">The Lead Agency - September 2022 - August 2023</div>
      <div className="box">During my studies I completed a year in industry placement at TLA (The Lead Agency) as a student software developer.
        I worked on a number of projects developing my backend skills in C#, ASP.net and SQL as well as doing work on the front end in React.
        A good portion of my time was spent working on an AI project where I continued to develop my knowledge of Python and learnt about Langchain and the use of vector databases. 
      </div>
    </div>
    <div className="container">
      <div className="box">University of Liverpool - September 2020 - July 2024</div>
      <div className="box">I achieved a first class degree in computer science specialised in artificial intelligence.
        The course itself was however quite broad. I learnt about functional programming in Haskell, OOP in Java, solutions to distributed systems, computer networks, big data analytics and computer forensics to name a few.
        The variety of topics studied helped me build a more interconnected understanding of computer science.
      </div>
    </div>
    <div className="container">
      <div className="box">British Telecom - June 2017</div>
      <div className="box">Completing work experience while at school opened my eyes to what it was like to work in the tech industry, and I loved it.
      During my week at British Telecoms, I watched demonstrations about how fibre optic cables work and how BT protects its FTTC cabinets against weather conditions;
      shadowed apprentices at the company, getting valuable insight into how small teams operate to solve a bigger collective challenge; and learnt how to make Ethernet cables.
      </div>
    </div>
    <hr size="1"></hr>
    <div className={styles['ethanmyles-heading']}>
      <p>Skills</p>
    </div>
  </>
  )
}

export default EthanMyles;