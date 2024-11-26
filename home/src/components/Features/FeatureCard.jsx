import { LiaExternalLinkAltSolid } from "react-icons/lia";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({ feature: { title, icon, description } }) => {
  return (
    <article className={styles["feature-card"]}>
      <div className={styles["feature-card-icons"]}>
        {icon}
        <LiaExternalLinkAltSolid size={20} />
      </div>
      <h5 className={styles["feature-card-title"]}>{title}</h5>
      <p className={styles["feature-card-para"]}>{description}</p>
    </article>
  );
};

export default FeatureCard;
