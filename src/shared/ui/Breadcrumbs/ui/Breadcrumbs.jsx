import styles from "./Breadcrumbs.module.scss";
import { classNames } from "@shared/lib/classNames/classNames";
import { memo } from "react";
import { useMatches } from "react-router-dom";

const Breadcrumbs = memo(({ cls }) => {
  const matches = useMatches();
  console.log(matches);
  
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) =>
      typeof match.handle.crumb === "function"
        ? match.handle.crumb(match)
        : match.handle.crumb
    );

  return (
    <div className={classNames(styles.breadcrumbs, {}, [cls, 'container'])}>
      {crumbs.map((crumb, index) => (
        <div key={index} className={styles.crumb} >{crumb}</div>
      ))}
    </div>
  );
});

export default Breadcrumbs;
