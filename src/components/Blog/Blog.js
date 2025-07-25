
import styles from './blog.module.css'

function Blog() {
  return (
    <>
      <title>Blog</title>
      <div className={styles['blog-temp']}>
        <h2>This is where my writings will go</h2>
      </div>
    </>
  );
}

export default Blog;