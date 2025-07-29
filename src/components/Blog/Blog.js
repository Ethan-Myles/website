
import styles from './blog.module.css'

function Blog() {
  return (
    <>
      <title>Blog</title>
      <div className={styles.wrapper}>
        <div className={styles['vertical-line']} />
        <div className={styles['button-group']}>
          <button className={styles['blog-button']}>blog1</button>
          <button className={styles['blog-button']}>blog2</button>
          <button className={styles['blog-button']}>blog3</button>
        </div>
        <div className={styles['vertical-line']} />
      </div>
    </>
  );
}

export default Blog;