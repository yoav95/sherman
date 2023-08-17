import Link from "next/link";
import styles from "./Menu.module.css";

// import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.control}>
          <Link href="/category/offices">
            <div className={styles.item}>
              <div className={`${styles.image} ${styles.offices}`}></div>
              <p>משרדים</p>
            </div>
          </Link>
        </div>
        <div className={styles.control}>
          <Link href="/category/stores">
            <div className={styles.item}>
              <div className={`${styles.image} ${styles.shops}`}></div>
              <p>חנויות ומסחר</p>
            </div>
          </Link>
        </div>
        <div className={styles.control}>
          <Link href="/category/logistics">
            <div className={styles.item}>
              <div className={`${styles.image} ${styles.industry}`}></div>
              <p>תעשייה ולוגיסטיקה</p>
            </div>
          </Link>
        </div>
        <div className={styles.control}>
          <Link href="/category/fields">
            <div className={styles.item}>
              <div className={`${styles.image} ${styles.fields}`}></div>
              <p>מגרשים</p>
            </div>
          </Link>
        </div>
        <div className={styles.control}>
          <Link href="/category/houses">
            <div className={styles.item}>
              <div className={`${styles.image} ${styles.houses}`}></div>
              <p>מגורים</p>
            </div>
          </Link>
        </div>
        <div className={styles.control}>
          <Link href="/category/estate">
            <div className={styles.item}>
              <div className={`${styles.image} ${styles.estate}`}></div>
              <p>נכסים מניבים</p>
            </div>
          </Link>
        </div>
      </div>
      {/* <a href="tel://+972547658885" className={styles.contact}>
        <div>
          <p>054-765-8885</p>
          <FaPhoneAlt />
        </div>
      </a> */}
    </>
  );
};

export default Menu;
