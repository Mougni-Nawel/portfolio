import React from 'react';
import Link from 'next/link';
import styles from '../assets/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <Link href="/home">Home</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
  };
  
  export default Header;