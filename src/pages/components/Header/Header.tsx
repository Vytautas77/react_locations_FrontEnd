import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const onLoginButton = () => {
    router.push("/Login");
  };

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
        <button onClick={onLoginButton}>Login</button>
      </nav>
    </div>
  );
};

export default Header;
