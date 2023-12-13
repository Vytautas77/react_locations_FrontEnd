import React from "react";
import styles from "./button.module.css";
import { Dancing_Script } from "next/font/google";

const inter = Dancing_Script({ subsets: ["latin"] });

type ButtonType = {
  isLoading?: boolean;
  onClick: () => void;
  text: string;
  className?: string; //neprivaloma reik6m4 (opshinal)
};

const Button: React.FC<ButtonType> = ({
  isLoading,
  onClick,
  text,
  className,
}) => {
  return (
    <button
      className={`${styles.btn} ${inter.className} ${className}`}
      onClick={onClick}
    >
      {!isLoading ? <>{text}</> : <>loading...</>}
    </button>
  );
};

export default Button;
