import { FaRegHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { MdOutlinePhonelinkSetup, MdDoNotDisturbAlt } from "react-icons/md";
import { RxReload } from "react-icons/rx";
import { IoIosInfinite } from "react-icons/io";

import styles from "./Support.module.css";

import Faq from "./Faq";

const faqs = [
  {
    id: "1",
    title: "Is there a free trial available?",

    description:
      "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    icon: <FaRegHeart />,
  },
  {
    id: "2",
    title: "Can I change my plan later?",

    description:
      "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan. ",
    icon: <TfiReload />,
  },
  {
    id: "3",
    title:
      "May I need to pay full amount while I update plan in the middle of the month?",

    description:
      "No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.",
    icon: <MdOutlinePhonelinkSetup />,
  },
  {
    id: "4",
    title: "Can I disable the auto renew?",
    description:
      "You can disable and enable auto renew anytime also you can choose auto renew from different options.",
    icon: <RxReload />,
  },
  {
    id: "5",
    title: "What is your cancellation policy?",

    description:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    icon: <MdDoNotDisturbAlt />,
  },
  {
    id: "6",
    title: "Can I run my business Pay As You Go for lifetime",

    description:
      "Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan.",
    icon: <IoIosInfinite />,
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

      <div className={styles["support-wrapper"]}>
        <div className={styles["faq-container"]}>
          {faqs.map((faq) => (
            <Faq key={faq.id} faq={faq} />
          ))}
        </div>

        <figure className={styles["support-img-container"]}>
          <img
            src="https://s3-alpha-sig.figma.com/img/93c7/5eea/6f0125dec555a6e38a70ad3d069d55af?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cn2iu3oAvjFtTnIzaNuFVwl~5sLZ9NLRmW95mJR-sTKcyQOLMJqD7xAyMNwXtOeYthTD8J3vimbiV1SCqddfKDlxEBnxJUNPkwL9WOlC5VRS6q31ruDPWk5fu-hhq8g~8V6CGkvPHHi7Kfb4GvWIk04BOb2kwQuW4qfkN-XSt1d6NUhPSQv7Oj8vF-4K~rs9XoL6tpaNg1erVzVwJqoErHcQuDGQo-IbaspAz23lj89UtPfIOmPdK~g6UsEY3FA8nvYuTsCvG75w9qAyCdnkD-8UIrEfPlOu825gvQK~1KD2ypj9im0oiTrDpzvfWlIqR4QurH6QESmO5yylwzMt7w__"
            alt="Ladies with smiley face"
          />
        </figure>
      </div>
    </section>
  );
};

export default Support;
