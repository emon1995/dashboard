import { FaTachometerAlt, FaRocket, FaBookOpen, FaHeart, FaCog, FaSignOutAlt} from 'react-icons/fa';
import styles from '../../styles/Home.module.css';

const LeftNavbar = () => {
  return (
    <div className={styles.navcontainer}>
      <div className={styles.logo}>
        <h2>WearHouse</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <FaTachometerAlt style={{ width: '18px', cursor: 'pointer' }} />
            <a href='#'>Dashboard</a>
          </li>
          <li>
            <FaRocket style={{ width: '18px', cursor: 'pointer' }} />
            <a href='#'>Explore</a>
          </li>
          <li>
            <FaBookOpen style={{ width: '18px', cursor: 'pointer' }} />
            <a href='#'>Library</a>
          </li>
          <li>
            <FaHeart style={{ width: '18px', cursor: 'pointer' }} />
            <a href='#'>Favorite</a>
          </li>
          <li>
            <FaCog style={{ width: '18px', cursor: 'pointer' }} />
            <a href='#'>Setting</a>
          </li>
          <li>
            <FaSignOutAlt style={{ width: '18px', cursor: 'pointer' }} />
            <a href='#'>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
