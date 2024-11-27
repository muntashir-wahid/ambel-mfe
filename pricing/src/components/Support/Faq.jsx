import styles from "./Faq.module.css";

const Faq = ({ faq: { title, icon, description } }) => {
  return (
    <div>
      <h4 className={styles["faq-title"]}>
        <span className={styles["faq-icon"]}>{icon}</span>
        <span>{title}</span>
      </h4>
      <p className={styles["faq-para"]}>{description}</p>
    </div>
  );
};

export default Faq;
