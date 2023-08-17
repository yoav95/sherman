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
              <span>{`שרמן נדל"ן`}</span>
            </div>
          </Link>
          <ul className={styles.list}>
            <Link href="/items/rent">להשכרה</Link>
            <Link href="/items/sale">למכירה</Link>
            <Link href="/category/houses">מגורים</Link>
            <Link href="/#contact">צור קשר</Link>
            <Link href="/#about">אודות</Link>
          </ul>
          <div className={styles.contact}>
            <a href="tel://+972547658885">
              <p>054-765-8885</p>
            </a>

            <FaPhoneAlt />
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
