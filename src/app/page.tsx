import styles from "./page.module.css";
import Image from "next/image";
import herobg from "@public/images/hero-bg.png";
import heroimage from "@public/images/hero-image.png";
import SiteButton from "./components/SiteButton";

export default function Home() {
  return (
    <main>
      <section id="hero-section">
        <Image src={herobg} alt="" fill className={styles.herobg} priority />
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.upper}>
              <h1 className={styles.heroheading}>Buy Your Favorite Items<br />
                <span className='text-gradient-green'>Fast, Safe, and Easy </span><br />
                with RoCart!
              </h1>
              <p className={styles.herosubheading}>
                Rocart the fastest, safest shop for in‑game items with automated delivery.<br />
                Get what you need in seconds.<br />
                For items in Murder Mystery 2,  Grow a Garden, Blox Fruits, Steal a Brainrot, Blade Ball.
              </p>
            </div>
            <SiteButton src="shopping-cart" text="Start Buying" href="/shop" variant="big" />
          </div>
          <Image src={heroimage} alt="Hero Image" className={styles.heroimage} priority />
        </div>
        <div className={styles.gradientSeparator}></div>
      </section>
    </main>
  );
}
