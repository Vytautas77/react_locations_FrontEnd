import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import exit from "../../../img/exit.png";
import Image from "next/image";
import cookie from "js-cookie";
import Button from "../Button/Button";

const Header = () => {
  //paslepiamas logOut jei neprisijunges
  const [isUserLoginIn, setIsUserLoginIn] = useState(false);
  useEffect(() => {
    const savedCookie = cookie.get("log152log");
    if (savedCookie) {
      setIsUserLoginIn(true);
    }
  }, []);

  const router = useRouter();
  const onLoginButton = () => {
    router.push("/Login");
  };
  const onClickLogOut = () => {
    try {
      cookie.remove("log152log");
      router.push("/Login");
    } catch (error) {
      console.error("Error during log-out:", error);
    }
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
        <Button onClick={onLoginButton} text={"Login"} />
        {isUserLoginIn && (
          <Image
            src={exit}
            className={styles.logOut}
            onClick={onClickLogOut}
            alt="Log out"
            width={200}
            height={200}
          />
        )}
      </nav>
    </div>
  );
};

export default Header;
