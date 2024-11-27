import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles["pricing-hero-wrapper"]}>
      <section className={styles["pricing-hero-container"]}>
        <div className={styles["pricing-hero-content"]}>
          <span>Pricing plans</span>
          <h1 className={styles["pricing-hero-heading"]}>
            Let’s Get Started. <br /> We’ve got a Plan that’s perfect for you.
          </h1>
          <p className={styles["pricing-hero-para"]}>
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
          <div className={styles["pricing-hero-cta"]}>
            <button>Monthly</button>
            <button>Yearly</button>
          </div>
          <div></div>
        </div>
        <figure></figure>
      </section>
    </div>
  );
};

export default Hero;
