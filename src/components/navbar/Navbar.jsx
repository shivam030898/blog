import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <FaDiscord size={28} color="#5865F2" />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <Link href="/" className={styles.logo}>
        Bloggin &apos; Bliss
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
