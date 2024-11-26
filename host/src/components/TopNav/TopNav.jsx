import { Link, NavLink } from "react-router-dom";

import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/">
          <img
            className={styles["nav-logo"]}
            src="https://s3-alpha-sig.figma.com/img/c9de/9db5/4c228b862c34ecba06471bed66c4795b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTQl4-frJLqLUsFlTLVlaCo-BAHQL8SJF74Dk7nstmDK2ToT2glHBDiCvLfhV7iGp34k1RoYy7yp9q9zKs~uOBczO6PCxDjyjS0631Suzfd9N8yBOgT38aaDe0DFPm2D2J3aOkuuNSjn3tmfMj~jpfboWoERsc6Qxl-PNmL3g9a4ql80ofNSrNNGhIqnVYzCrufGeBmNgfGjJxi-R2Bw~q1mQ4VVtcVMgwL4mbsXJMCp377yXhlZuYok5ygq~xOz5csOqsHYUgm3OxKjc5v8zw--WSpAvSBQLV7ngK8-SYvyWsZKfEGrZIhWRS8KLegt8LTTj-GpK9xvn-QAGhaWPw__"
          />
        </NavLink>

        <ul className={styles["nav-items"]}>
          <li>
            <Link className={styles["nav-link"]} to="/">
              Features
            </Link>
          </li>
          <li>
            <Link className={styles["nav-link"]} to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className={styles["nav-link"]} to="/pricing">
              Solutions
            </Link>
          </li>
        </ul>

        <div className={styles["nav-actions"]}>
          <button>Log In</button>
          <button>Sigh Up</button>
        </div>
      </nav>
    </header>
  );
};

export default TopNav;
