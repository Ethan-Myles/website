import styles from './additionalinfo.module.css'
const bannerImage = '/images/banner.png';
const logoImage = '/images/logo.png';
const videoImage = '/images/infix to postfix conversion using a stack.png';
const videoTwoImage = '/images/matrix chain multiplication.png';


function AdditionalInfo() {
  return (
    <>
      <title>Additional Info</title>
      <div className={styles['container']}>
        <div className={styles['banner']}>
          <img src={bannerImage} alt="banner" className={styles['banner-image']}></img>
        </div>
        <div className={styles['logo']}>
          <img src={logoImage} alt="logo" className={styles['logo-image']}></img>
        </div>
        <div className={styles['info']}>
          <h2>Ethan Myles</h2>
          <p>I've made some videos on Youtube about topics that interest me in CS</p>
          <button className={styles['additional-info-button']} onClick={() => window.open('https://www.youtube.com/@Ethan_Myles', '_blank', 'noopener,noreferrer')}>Check them out</button>
        </div>
      </div>
      <div className={styles['video-container']}>
        <div className={styles['video']}>
          <a href="https://www.youtube.com/watch?v=Ue3VrbsTw9M&t=4s" target="_blank" rel="noopener noreferrer">
            <img src={videoImage} alt="infix to postfix conversion using a stack" className={styles['video-image']}></img>
          </a>
        </div>
        <div className={styles['video']}>
          <a href="https://www.youtube.com/watch?v=AhSlgQGKQyo" target="_blank" rel="noopener noreferrer">
            <img src={videoTwoImage} alt="matrix chain multiplication" className={styles['videoTwo-image']}></img>
          </a>
        </div> 
      </div>
      <hr size="1"></hr>
      <div className={styles['additional-info-heading']}>
        <h2>Charity</h2>
      </div>
      <div className={styles['additional-info-paragraph-one-text']}>
        <p>In 2024 I ran the Liverpool half marathon and raised £230 for Alder Hey Children's hospital</p>
      </div>
      <div className={styles['additional-info-paragraph-two-text']}>
        <p>In 2025 I ran the London marathon and raised £1000 for Alzheimer's Research UK</p>
      </div>
    </>
  );
}

export default AdditionalInfo;