import styles from "./Services.module.css";

const services = [
  {
    id: "1",
    title: "One brand in one easy to use system, across all your locations",
    description:
      "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/c3ec/9cdf/d377a92266fba3407c5d88f01da602ca?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coovqliGZ2AYOrY1JGBTnMo9ZiTRWOVOtimVssCJd64mNYpi-Dcmn8sSUeZNFCBIC1mmxfZKL3Xk09eF39Od2IpW9VbLB1PgpQnRuFUrpTLPld7BfGy6FLAdzT9i8AVPvpk0mg5xzXMlTDqhicOYMq-I3mqi6LJp6pIAcGcgYnXkkWypGBOGAw-pxkeVUthlzqUlQ7gfnHyU8~L3qobd2gF4EqGE4Y2PPSGk8FRx-gF7nIHcuIJj6cQnqQrB3uI3MZA0o7MzsWWiJX1OVNDYbs9E9WMzWsKrMEa6VvF3jmoSQEseYkGwBRfAF-MYUVS2xnHMHFnEXFTBF8vM92cGOw__",

    color: "#14B8A6",
    textColor: "white",
  },
  {
    id: "2",
    title:
      "Invite unlimited team members and assign custom roles and permissions",
    description:
      "This feature enables organizations to efficiently manage team members across one or multiple locations. Roles can be assigned and customized to control access, ensuring that team members only view or edit information and resources relevant to their roles.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/573b/50b1/4a8602c842027014dd291ca03a36180a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MD4FFK93y5Y0QF3TrWRJ0bV68-rCeFc4xeXPkuwDZ50uHBqv1guELsNXsf-2~qL9RTn6QTtrdIrjh--TyCmhgElX~oNhzLoo3-KkSAne4zIht3KJOZq2e1HXdeP0uVLgI6v0GL2WZS-MeVHVyr6buw6ORzqm4cOdCVzkT0SzNJdzt2n3ewKJcvqTriZGRAXz2OmWJsdWbZ2ytWV-YdV4xH2CC58IGliCKNUutl1gDGbjz3dTx~x0zxCncfRbMJBC4WMrXMhN3qxTFRXIundtZmgmuZ2yJyRdmZl9HCtNB39R6AIIpfBRTPod6WkOJi491Wq~t5B~a49IZotc3M78qg__",
    color: "#327FF0",
    textColor: "white",
  },
  {
    id: "3",
    title: "Securely manage and organize payments: Cash, Debit, Credit",
    description:
      "Customers can securely payment via online credit, debit card, In person POS, Tap to pay and in app wallet. Also can record of cash and other gateway payment for reporting. Ambel integrates with gateways like Stripe, Clover, Square, and PayPal, providing comprehensive support for all your accounting and bookkeeping needs.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/27be/d8d0/7eb878699b99260442b8938d48d83ecb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=im2x7yolVDtIJHEhooKiiU0sFufoQ39XDb8TsruIDN2KFbFlYoi15ptjpOmqvo86cNZCuTsSe69Djc-iuY7Vh5WAXfxwgfzZzYRIou5gSO0L1~j3glCZLIvCo0pI1sYfoP~S4BbANfrUH0FtTCe-QgbgK9V1MOaWW0Aede1mS~0RiSsj~SHrlHrRsgFEZ43-9hmJ0D3N6xxy1EfHJykoCFBKJUF38W0WXKE8n9~~KFUH83g63sBJmdbEdtxYKeI5kmbIlHMDAUiGw9MsLSCM~pvZ0u50hRBrr2bVOiqYiFSKBX887dtjUQxFb7Wm1HH7PjIFs2ag69BMa8h5x3P7mA__",
    color: "#327FF0",
    textColor: "white",
  },
  {
    id: "4",
    title: "Third party apps Integrations tailored your business",
    description:
      "Connect tools like Google Meet, Zoom, Loom, Zapier, Zendesk, and WhatsApp to streamline operations. Ambel also integrates with payment gateways such as Stripe, PayPal, Clover, and Square, allowing you to access all features in one convenient platform.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/27be/d8d0/7eb878699b99260442b8938d48d83ecb?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=im2x7yolVDtIJHEhooKiiU0sFufoQ39XDb8TsruIDN2KFbFlYoi15ptjpOmqvo86cNZCuTsSe69Djc-iuY7Vh5WAXfxwgfzZzYRIou5gSO0L1~j3glCZLIvCo0pI1sYfoP~S4BbANfrUH0FtTCe-QgbgK9V1MOaWW0Aede1mS~0RiSsj~SHrlHrRsgFEZ43-9hmJ0D3N6xxy1EfHJykoCFBKJUF38W0WXKE8n9~~KFUH83g63sBJmdbEdtxYKeI5kmbIlHMDAUiGw9MsLSCM~pvZ0u50hRBrr2bVOiqYiFSKBX887dtjUQxFb7Wm1HH7PjIFs2ag69BMa8h5x3P7mA__",
    color: "#0046B0",
    textColor: "white",
  },
];

const replaces = [
  "Jane",
  "Calendly",
  "Cal.com",
  "acuity",
  "Square appointment",
  "Simplybook.me",
  "Zenoti",
  "Appointy",
  "Set More",
  "Honey Book",
];

const Services = () => {
  return (
    <div>
      <div className={styles["services-container"]}>
        {services.map((service) => (
          <div
            style={{ backgroundColor: service.color, color: service.textColor }}
            className={styles["services-card"]}
            key={service.id}
          >
            <div>
              <h5 className={styles["services-card-title"]}>{service.title}</h5>
              <p className={styles["services-card-para"]}>
                {service.description}
              </p>
            </div>
            <figure>
              <img src={service.imgSrc} />
            </figure>
          </div>
        ))}
      </div>

      <div className={styles["replace-container"]}>
        <span>Replace:</span>
        {replaces.map((item) => (
          <span key={item} className={styles["replace-badge"]}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Services;
