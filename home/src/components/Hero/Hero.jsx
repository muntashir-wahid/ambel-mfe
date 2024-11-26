import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <h1 className={styles["hero-heading"]}>
          Looking for a Business Solution for appointments?
        </h1>
        <p>
          Ambel simplifies business management by providing tools for scheduling
          appointments, managing bookkeeping, accepting payments, sharing
          resources with customers, sending reminders, and running email
          marketing campaigns.
        </p>
        <div className={styles["hero-cta"]}>
          <button>Start A Free Trial</button>
          <button>Find Professionals</button>
        </div>
        <div></div>
      </div>
      <figure></figure>
    </section>
  );
};

export default Hero;
