import styles from "./Pricing.module.css";

import TopNav from "host/TopNav";

const Pricing = () => {
  return (
    <div>
      <TopNav />
      <div className={styles.pricing}>Welcome to Pricing. I love you</div>
    </div>
  );
};

export default Pricing;
