"use client";

import { useState } from "react";
import Logo from "@components/Logo";
import DropDownButton from "@components/DropDownButton";
import styles from "./NavBar.module.css";
import SiteButton from "@components/SiteButton";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Logo />
                    <DropDownButton src="controller" text="Choose a game" altText="choose a game" />
                </div>
                <div className={styles.right}>
                    <DropDownButton src="us-flag" text="English/USD" altText="language and currency" />
                    <SiteButton src="account" text="Log in" href="/login" variant="small" />
                </div>
                
                {/* Hamburger Menu Button */}
                <button 
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    <span className={menuOpen ? styles.open : ''}></span>
                    <span className={menuOpen ? styles.open : ''}></span>
                    <span className={menuOpen ? styles.open : ''}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.menuContent}>
                    <DropDownButton src="controller" text="Choose a game" altText="choose a game" />
                    <DropDownButton src="us-flag" text="English/USD" altText="language and currency" />
                    <SiteButton src="account" text="Log in" href="/login" variant="small" />
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div 
                    className={styles.overlay} 
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </header>
    );
}