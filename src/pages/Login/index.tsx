import React, { useState } from "react";
import axios from "axios";
import styles from "./login.module.css";

import cookie from "js-cookie";
import { useRouter } from "next/router";
import PageTemplate from "../template/PageTemplate";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const onLogin = async () => {
    const body = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      "http://localhost:3001/users/login",
      body
    );

    if (response.status === 200) {
      cookie.set("log152log", response.data.token);
      router.push("/");
    }
    console.log("response", response);
  };
  return (
    <>
      <PageTemplate>
        <div className={styles.loginWrapper}>
          <div className={styles.form}>
            <h3>User Login</h3>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button className={styles.btn} onClick={onLogin}>
              Login
            </button>
          </div>
        </div>
      </PageTemplate>
    </>
  );
};

export default Login;
