import ContactForm from "./ContactForm";
import Container from "../UI/Container";
import styles from "./ContactBlock.module.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactBlock = (props) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>מחפשים נכס מסחרי?</h2>
          <p className={styles.subtitle}>
            השאירו פרטים ונחזור אליכם תוך 24 שעות עם הצעות מותאמות אישית
          </p>
        </div>
        <div className={styles.control}>
          <div className={styles.information}>
            <h3>צרו קשר ישיר</h3>
            <a href="tel://+972547658885" className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <FaPhoneAlt />
              </div>
              <div className={styles.contactText}>
                <span>התקשרו עכשיו</span>
                <p>054-765-8885</p>
              </div>
            </a>
            <a
              href="https://wa.me/972547658885"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <div className={styles.iconWrapperWhatsapp}>
                <FaWhatsapp />
              </div>
              <div className={styles.contactText}>
                <span>וואטסאפ</span>
                <p>שלחו הודעה</p>
              </div>
            </a>
            <a href="mailto:amir@shermanadlan.com" className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <FaEnvelope />
              </div>
              <div className={styles.contactText}>
                <span>אימייל</span>
                <p>amir@shermanadlan.com</p>
              </div>
            </a>
          </div>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactBlock;