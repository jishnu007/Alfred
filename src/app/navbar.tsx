import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { UserAuth } from "./context/AuthContext";
import Avatar from "react-avatar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = UserAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbarOuter}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          {/* <div className={styles.logo}>
            <Image
              src="/images/logo3.png"
              alt="Alfred logo"
              width={50}
              height={50}
              priority
            />
          </div> */}
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span className={isOpen ? styles.bar1 : ""}></span>
            <span className={isOpen ? styles.bar2 : ""}></span>
            <span className={isOpen ? styles.bar3 : ""}></span>
          </div>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            <li>
              <a href="#">Nav 1</a>
            </li>
            <li>
              <a href="#">Nav 2</a>
            </li>
            <li>
              <a href="#">Nav 3</a>
            </li>
            {!user ? (
              <li>
                <a href="/auth/login" className={styles.login}>
                  Login
                </a>
              </li>
            ) : user.photoURL ? (
              <Avatar
                src={user.photoURL}
                className={styles.avatar}
                round={true}
                size="40"
                onClick={logout}
              />
            ) : (
              <Avatar
                name={user.displayName || ""}
                className={styles.avatar}
                size="40"
                onClick={logout}
              />
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
