import styles from './pagenotfound.module.css'

function PageNotFound() {
  return (
    <>
      <div class={styles['pnf-container']}>
        <div className={styles['pnf-title']}>
          <h1>404</h1>
        </div>
        <div className={styles['pnf-message']}>
          <h2>You've reached a page that doesn't exist</h2>
          <h2>Use the navigation bar at the top to find your way back</h2>
        </div>
      </div>
      <div className={styles['pnf-robots']}>
        <img className={styles['pnf-robot-one']} src="/images/404_figurine.jpg" alt="This robot has got lost"/>
        <img className={styles['pnf-robot-two']} src="/images/404_figurine.jpg" alt="This robot has also got lost"/>
        <img className={styles['pnf-robot-three']} src="/images/404_figurine.jpg" alt="This robot is definetly lost"/>
      </div>
    </>
  );
}

export default PageNotFound;