import React from "react";

import styles from "./Header.module.scss";

import { Container } from "@mui/material";
import Cart from "../../components/Cart/Cart";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.content}>
        <div className={`${styles.content_side} left`}>
          <button className={styles.logo}>
            <span>LOGO</span>
          </button>
        </div>
        <div className={`${styles.content_side} right`}>
          <Cart />
        </div>
      </Container>
    </header>
  );
};

export default Header;
