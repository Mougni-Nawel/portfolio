import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <button className={styles.button}>Click me</button>
      </nav>
    </header>
  );
  };
  
  export default Header;