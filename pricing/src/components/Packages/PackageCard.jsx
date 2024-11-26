import { FaCheckCircle } from "react-icons/fa";

import styles from "./PackageCard.module.css";

const PackageCard = ({ packageItem: { title, plans } }) => {
  return (
    <article className={styles["package-card"]}>
      <h5 className={styles["package-card-title"]}>{title}</h5>

      <ul className={styles["package-list"]}>
        {plans.map((plan) => (
          <li className={styles["package-list-item"]} key={plan}>
            <FaCheckCircle />
            <span>{plan}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PackageCard;
