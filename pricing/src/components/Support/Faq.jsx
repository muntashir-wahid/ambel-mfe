import styles from "./Faq.module.css";

const Faq = ({ faq: { title, icon, description } }) => {
  return (
    <div>
      <h4 className={styles["faq-title"]}>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Faq;
