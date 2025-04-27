import styles from "./ListTypeChange.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";

const ListTypeChange = memo(({ cls, ...props }) => {
  return (
    <button {...props} className={classNames(styles.listTypeChange, {}, [cls])}>
      Списком
    </button>
  )
});

export default ListTypeChange;
