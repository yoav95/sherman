"use client";
import styles from "./Navbar.module.css";
import Container from "../UI/Container";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Container type={false}>
        <nav className={styles.nav}>
          <Link href="/">
            <div className={styles.logo}>
              <img src="/images/symbol.svg" className={styles.svg} />
              <span>{`שרמן נדל"ן`}</span>
            </div>
          </Link>
          <ul
            className={isOpen ? `${styles.list} ${styles.open}` : styles.list}
          >
            <Link href="/items/rent" onClick={() => setOpen(false)}>
              להשכרה
            </Link>
            <Link href="/items/sale" onClick={() => setOpen(false)}>
              למכירה
            </Link>
            <Link href="/category/houses" onClick={() => setOpen(false)}>
              מגורים
            </Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>
              צור קשר
            </Link>
            <Link href="/#about" onClick={() => setOpen(false)}>
              אודות
            </Link>
          </ul>
          <div className={styles.contact}>
            <a href="tel://+972547658885">
              <p>054-765-8885</p>
            </a>

            <FaPhoneAlt className={styles["trin-trin"]} />
          </div>
          <div className={styles.burger}>
            <Hamburger size={25} toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
