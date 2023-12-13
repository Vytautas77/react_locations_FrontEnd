import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./style.module.css";
import { Dancing_Script } from "next/font/google";

const inter = Dancing_Script({ subsets: ["latin"] });
type pageTemplateType = {
  children: ReactNode;
};

const PageTemplate: React.FC<pageTemplateType> = ({ children }) => {
  return (
    <div className={`${styles.wrapper} ${inter.className}`}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
