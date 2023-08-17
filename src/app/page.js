import Container from "../components/UI/Container";
import styles from "./Home.module.css";
import Menu from "../components/Menu/Menu";
import { FaPhoneAlt } from "react-icons/fa";
import About from "../components/About/About";
import ContactBlock from "@/components/ContactBlock/ContactBlock";

const HomePage = () => {
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.circle}></div>
        <Container>
          <div className={styles.box}>
            <div className={styles.preview}>
              <h2>{`שרמן נדל"ן`}</h2>
              <h1>{`נדל”ן מסחרי`}</h1>
              <h2>{`אנחנו מתמחים במשרדים ונדל''ן מסחרי`}</h2>
            </div>
            <Menu />
          </div>
        </Container>
      </section>
      <section className={styles.sectionTwo} id="about">
        <About />
      </section>
      <section className={styles.sectionThree} id="contact">
        <div className={styles.fullwidth}>
          <Container>
            <ContactBlock />
          </Container>
        </div>
      </section>
    </>
  );
};

export default HomePage;
