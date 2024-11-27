import { FaCheckCircle } from "react-icons/fa";

import styles from "./PackageCard.module.css";

const PackageCard = ({
  packageItem: { title, plans, icon, price, description },
}) => {
  return (
    <article className={styles["package-card"]}>
      <header className={styles["pricing-card-header"]}>
        <div className={styles["package-icon"]}>{icon}</div>
        <h5 className={styles["package-card-title"]}>{title}</h5>
        <p className={styles["price"]}>
          <span>$</span> <span>{price}</span>
        </p>
        <p className={styles["pricing-description"]}>{description}</p>
      </header>

      <ul className={styles["package-list"]}>
        {plans.map((plan) => (
          <li className={styles["package-list-item"]} key={plan}>
            <FaCheckCircle />
            <span>{plan}</span>
          </li>
        ))}
      </ul>

      <footer className={styles["pricing-card-footer"]}>
        <button>Get Started</button>
      </footer>
    </article>
  );
};

export default PackageCard;
