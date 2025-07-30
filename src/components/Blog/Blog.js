import styles from './blog.module.css';

function Blog() {
  return (
    <>
      <title>Blog</title>

        <div className={styles.grid}>

          <div className={styles['blog-introduction']}>
            <p>Some writings<br/>about topics I'm<br/>interested in</p>
          </div>

          <div className={styles['blogs']}>      
            <button className={styles['blog-button']}>
              <h2 className={styles['blog-title']}>blog1</h2>
              <p>This is where my first blog would go</p>
            </button>
            <button className={styles['blog-button']}>
              <h2 className={styles['blog-title']}>blog2</h2>
              <p>This is where my second blog would go</p>          
            </button>
            <button className={styles['blog-button']}>
              <h2 className={styles['blog-title']}>blog3</h2>
              <p>This is where my third blog would go</p>
            </button>
            <button className={styles['blog-button']}>
              <h2 className={styles['blog-title']}>blog4</h2>
              <p>This is where my fourth blog would go</p>          
            </button>
            <button className={styles['blog-button']}>
              <h2 className={styles['blog-title']}>blog5</h2>
              <p>This is where my fifth blog would go</p>        
            </button>
          </div>

          <div className={styles['blog-topics']}>
            <p>
              <p>Pick a topic</p><br/>
              <a className={styles['blog-topic']} href="">Python</a>
              <a className={styles['blog-topic']} href="">C#</a>
              <a className={styles['blog-topic']} href="">History</a>
              <a className={styles['blog-topic']} href="">Miscellaneous</a>
            </p>
          </div>

        </div>
    </>
  );
}

export default Blog;