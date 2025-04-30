import styles from "./Input.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";

const Input = memo(
  ({ cls, placeholder, type, style, name, label = "", value, onChange }) => {
    return (
      <div className={classNames(styles.input, {}, [styles[style], [cls]])}>
        <label htmlFor={name}>{label}</label>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Input;
