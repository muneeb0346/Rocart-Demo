import Logo from "@components/Logo";
import DropDownButton from "@components/DropDownButton";
import styles from "./NavBar.module.css";
import SiteButton from "@components/SiteButton";

export default function NavBar() {
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
            </div>
        </header>
    );
}