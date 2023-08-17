import ContactForm from "./ContactForm";
import Container from "../UI/Container";
import styles from "./ContactBlock.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const ContactBlock = (props) => {
  return (
    <>
      <Container>
        <div className={styles.control}>
          <div className={styles.information}>
            <a href="tel://+972547658885">
              <div>
                <FaPhoneAlt />
                <p>054-765-8885</p>
              </div>
            </a>
            <div>
              <FaEnvelope />
              <p>amir@shermanadlan.com</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </>
  );
};
export default ContactBlock;
