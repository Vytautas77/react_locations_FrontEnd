import React from "react";
import styles from "./button.module.css";

type ButtonType = {
  isLoading: boolean;
  onAddLocation: () => void;
};

const Button: React.FC<ButtonType> = ({ isLoading, onAddLocation }) => {
  return (
    <button className={styles.btn} onClick={onAddLocation}>
      {isLoading ? <>Add location</> : <>loading...</>}
    </button>
  );
};

export default Button;
