import Faq from "./Faq";
import styles from "./Support.module.css";

const faqs = [
  {
    id: "1",
    title: "Is there a free trial available?",
    icon: "",
    description:
      "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
  },
  {
    id: "2",
    title: "Can I change my plan later?",
    icon: "",
    description:
      "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan. ",
  },
  {
    id: "3",
    title:
      "May I need to pay full amount while I update plan in the middle of the month?",
    icon: "",
    description:
      "No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.",
  },
  {
    id: "4",
    title: "Can I disable the auto renew?",
    icon: "",
    description:
      "You can disable and enable auto renew anytime also you can choose auto renew from different options.",
  },
  {
    id: "5",
    title: "What is your cancellation policy?",
    icon: "",
    description:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
  },
  {
    id: "6",
    title: "Can I run my business Pay As You Go for lifetime",
    icon: "",
    description:
      "Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan.",
  },
];

const Support = () => {
  return (
    <section className={styles["support-container"]}>
      <header>
        <p className={styles["support-heading-tag"]}>Support</p>
        <h3 className={styles["support-heading"]}>
          Frequently asked questions
        </h3>
        <p className={styles["support-para"]}>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </header>

      <div>
        <div className={styles["faq-container"]}>
          {faqs.map((faq) => (
            <Faq key={faq.id} faq={faq} />
          ))}
        </div>
        <figure></figure>
      </div>
    </section>
  );
};

export default Support;
