import styles from "./Button.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";

const Button = memo(({ cls, tooltip, isActive, children, type, align, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <button
        {...props}
        className={classNames(styles.button, {}, [styles[type], styles[isActive], styles[align], cls])}
      >
        {children}
      </button>
      <span>{tooltip}</span>
    </div>
  );
});

export default Button;
