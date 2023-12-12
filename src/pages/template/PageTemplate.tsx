import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./style.module.css";

type pageTemplateType = {
  children: ReactNode;
};

const PageTemplate: React.FC<pageTemplateType> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
