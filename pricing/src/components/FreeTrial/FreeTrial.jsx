import styles from "./FreeTrial.module.css";

const FreeTrial = () => {
  return (
    <section className={styles["trail-container"]}>
      <div>
        <h2 className={styles["trail-heading"]}>
          Start your 30-day free trial
        </h2>
        <p className={styles["trail-para"]}>
          Join over 100+ practitioner and organization already growing with
          Ambel
        </p>
      </div>
      <div className={styles["trail-cta"]}>
        <button>Learn More</button>
        <button>Get Stared</button>
      </div>
    </section>
  );
};

export default FreeTrial;
