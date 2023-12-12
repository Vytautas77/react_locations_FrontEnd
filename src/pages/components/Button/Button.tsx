import React from "react";
import styles from "./button.module.css";

type ButtonType = {
  isLoading: boolean;
  onClick: () => void;
  text: string;
};

const Button: React.FC<ButtonType> = ({ isLoading, onClick, text }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {!isLoading ? <>{text}</> : <>loading...</>}
    </button>
  );
};

export default Button;
