import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>
        Built and designed by{" "}
        <a href="x">
          <span className={styles.bold}>Robot</span>Bird
        </a>
      </span>
    </footer>
  );
};

export default Footer;
