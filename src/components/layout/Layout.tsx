import styles from "./Layout.module.scss";

import hamburgerMenuIcon from "../../assets/hamburger-icon.png";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks.tsx";

interface LayoutProps {
  children: React.ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>TrackMate</div>
        <div
          className={styles.menuIcon}
          onClick={() => setMobileMenuOpen((prevState) => !prevState)}
        >
          <img src={hamburgerMenuIcon} alt="Menu icon" />
        </div>
        <nav
          className={`${styles.mobileMenu} ${
            mobileMenuOpen ? styles.active : ""
          }`}
        >
          <NavLinks />
        </nav>
        <nav className={styles.topNav}>
          <NavLinks />
        </nav>
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
