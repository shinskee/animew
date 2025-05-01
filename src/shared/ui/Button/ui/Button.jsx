import styles from "./Button.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";

const Button = memo(
  ({ cls, tooltip, isActive, children, type, align, ...props }) => {
    return (
      <div className={styles.wrapper}>
        <button
          {...props}
          aria-describedby="tooltip"
          className={classNames(styles.button, {}, [
            styles[type],
            styles[isActive],
            styles[align],
            cls,
          ])}
        >
          {children}
        </button>
        {tooltip && <span role="tooltip">{tooltip}</span>}
      </div>
    );
  }
);

export default Button;
