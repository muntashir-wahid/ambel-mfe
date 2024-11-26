import styles from "./Pricing.module.css";

import TopNav from "host/TopNav";
import Features from "home/Features";

const Pricing = () => {
  return (
    <div>
      <TopNav />
      <div className={styles.pricing}>Welcome to Pricing. I love you</div>
      <Features />
    </div>
  );
};

export default Pricing;
