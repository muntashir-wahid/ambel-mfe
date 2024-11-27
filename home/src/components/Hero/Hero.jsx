import { CiSearch } from "react-icons/ci";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-header"]}>
          <h1 className={styles["hero-heading-main"]}>
            Looking for a <span>Business Solution</span>
            <br />
            <span>for</span> appointments?
          </h1>
          <p className={styles["hero-para-main"]}>
            Ambel simplifies business management by providing tools for
            scheduling appointments, managing bookkeeping, accepting payments,
            sharing resources with customers, sending reminders, and running
            email marketing campaigns.
          </p>
          <div className={styles["hero-cta"]}>
            <button className={styles["hero-cta-btn-trail"]}>
              Start A Free Trial
            </button>
            <button className={styles["hero-cta-btn-find"]}>
              <CiSearch />
              <span>Find Professionals</span>
            </button>
          </div>
        </div>

        <figure className={styles["hero-banner"]}>
          <img
            src="https://ambel.ca/_next/image?url=%2FhomePage%2Fhero%2FMain-image.webp&w=1200&q=75"
            alt="Hero image of amble"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
