import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link href={"/"} className={styles.link}>
          Logo
        </Link>
      </div>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <a href="#">xxxxx</a>
          </li>
          <li>
            <a href="#">xxxxx</a>
          </li>
          <li>
            <a href="#">xxxxx</a>
          </li>
          <li>
            <Link href="/add-location">Add location</Link>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Header;
