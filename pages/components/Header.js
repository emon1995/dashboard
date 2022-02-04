import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import proPic from '../../images/watermark.png';
const Header = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headwrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>Emon</span>
          </h2>
          <p>Welcome to the board</p>
        </div>
        <div className={styles.profile}>
          <Image
            className={styles.image}
            src={proPic}
            alt='profile'
            width='40px'
            height='40px'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
