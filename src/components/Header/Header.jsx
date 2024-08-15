import styles from './Header.module.css';

<header className={styles.header}>
  <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
        <a href="./home.html" className={styles["nav-link"]}>Home</a>
      </li>
      <li className={styles["nav-item"]}>
        <a href="./catalog.html" className={styles["nav-link"]}>Catalog</a>
      </li>

      <li className={styles["nav-item"]}>
        <a href="./favorites.html" className={styles["nav-link"]}>Favorites</a>
      </li>
    </ul>
  </nav>
</header>