import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Logo</div>
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
            <a href="#">xxxxx</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Header;
