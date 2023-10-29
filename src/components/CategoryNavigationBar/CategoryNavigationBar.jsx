import React from "react";
import styles from "./CategoryNavigationBar.module.css";
import Link from "next/link";
const CategoryNavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/category/fields">מגרשים</Link>
        </li>
        <li>
          <Link href="/category/houses">מגורים</Link>
        </li>
        <li>
          <Link href="/category/offices">משרדים</Link>
        </li>
        <li>
          <Link href="/category/stores">חנויות ומסחר</Link>
        </li>
        <li>
          <Link href="/category/logistics">תעשייה ולוגיסטיקה</Link>
        </li>
        <li>
          <Link href="/category/estate">נכסים מניבים</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavigationBar;
