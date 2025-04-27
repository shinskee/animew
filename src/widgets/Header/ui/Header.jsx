import { NavLink } from "react-router-dom";
import logo from "./../../../shared/images/logo.jpeg";
import Search from "../../Search";
import { useInView } from "react-intersection-observer";
import ButtonScrollTop from "../../../shared/ui/ButtonScrollTop/ButtonScrollTop";
import styles from "./Header.module.scss";
import { memo } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";

const Header = memo(() => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <header ref={ref} className={classNames(styles.headerWrapper, {}, [])}>
      <ButtonScrollTop inView={inView} />
      <nav className={classNames(styles.header, {}, ['container'])}>
        <ul className={styles.nav}>
          <NavLink to={"/"} className={styles.logo}>
            <img src={logo} alt="" width={50} />
            <p>
              ANIME<span>W</span>
            </p>
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.catalog}` : styles.catalog
            }
          >
            Каталог
          </NavLink>
          <NavLink
            to="/favorites"
            //   className={({ isActive }) =>
            //     isActive ? `${styles.active} ${styles.catalog}` : styles.catalog
            //   }
            className={classNames(styles.catalog, {}, [
              ({ isActive }) => isActive && styles.active,
            ])}
          >
            Избранное
          </NavLink>
          {/* <Search /> */}
        </ul>
      </nav>
    </header>
  );
});

export default Header;
