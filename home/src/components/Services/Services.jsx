import styles from "./Services.module.css";

const services = [
  {
    id: "1",
    title: "One brand in one easy to use system, across all your locations",
    description:
      "Give customers a consistent brand experience, online and in person. With one source for all your business information, you'll unify your guest data, business operations, marketing efforts, and more from one login area.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/c3ec/9cdf/d377a92266fba3407c5d88f01da602ca?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=coovqliGZ2AYOrY1JGBTnMo9ZiTRWOVOtimVssCJd64mNYpi-Dcmn8sSUeZNFCBIC1mmxfZKL3Xk09eF39Od2IpW9VbLB1PgpQnRuFUrpTLPld7BfGy6FLAdzT9i8AVPvpk0mg5xzXMlTDqhicOYMq-I3mqi6LJp6pIAcGcgYnXkkWypGBOGAw-pxkeVUthlzqUlQ7gfnHyU8~L3qobd2gF4EqGE4Y2PPSGk8FRx-gF7nIHcuIJj6cQnqQrB3uI3MZA0o7MzsWWiJX1OVNDYbs9E9WMzWsKrMEa6VvF3jmoSQEseYkGwBRfAF-MYUVS2xnHMHFnEXFTBF8vM92cGOw__",

    color: "#00B0AD",
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
    color: "#0046B0",
    textColor: "white",
  },
  {
    id: "4",
    title: "Create a free website and start selling your products online.",
    description:
      "With our Online Shop and Inventory Management System, you can easily manage inventory, streamline e-commerce operations, and provide an exceptional shopping experience for your customers. Enjoy full e-commerce functionality to manage products, orders, and inventory seamlessly.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/5a5a/9345/258148f76fc7709cb4a5aca65d4400d0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJVQtYoMp8IEjfGuD-hJLiHdfICETZT~fBUaLMCn4r9G0RdH3CQEEfrtkz9f5T~ob33O1azBzsbISjsG3vkspAnvddbYwAtaIuqFjqGK4uygeWXlPcFMTD6saRSlzIybCRmlngnrc-mr95NRhLSwVxUAIfCJWNlILpNrof~nsT7jDpk5k5wpjFDUREndmOzACLpVdwmBQLceZWHlSL~m189KeRlNv446jhLQ3yKt4wTnOxd59UXcPgrDAOZ2q2zIND2AqJ-n~9MPMqDt6~15vFo-BWNVHAI-YCjMezlaZyuk-CFshPbyTBzBlnnS-3LHWRpD5vyO~qRlq9CYC6otDQ__",
    color: "#FD9F00",
    textColor: "#101828",
  },

  {
    id: "5",
    title: "Boost Sales with Gift Cards, Packages, and Memberships",
    description:
      "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/2688/e426/3519fbf2ab484e140d12ef980fb579a1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oYt6DDkoQR45WZl2ayjbf0uwgE-CTf8CHpZe09yI941Z-18FGTqGtzHZrTCFVOFE5cfy6nehL0qsABpsp4BPMFCQAbEtlYkO2JSxmF-pQMqUpEvxmw-awccDVFY8Z1jmV0EWZ0ndGQe3JaDP-NZ2pjmAgwpLnAG9jEvQF5MOi~HqgJTf9wDyAMX~Kzc5w-Og~1zZgeYqAWP8omLRGoztsF2kdMqlYmcPPMUeSIiv6GH6AsXJysVnOMrGYnxX8wBW~dH6LW9EjjpHEMWCESIAsqtKKhCM9Wzba1FAJuQXw2cohYIB0c8gxJn-o-PO5GC8prL~4TrU917OPYV-jkLttA__",
    color: "#79A78A",
    textColor: "white",
  },
  {
    id: "6",
    title: "Boost Sales with Gift Cards, Packages, and Memberships",
    description:
      "Enhance customer loyalty and increase revenue by offering gift cards for easy gifting, tailored packages that add value, and membership programs that reward repeat purchases. These options attract new customers, encourage larger purchases, and build a loyal customer base.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/12fb/b9fc/8ac5c5ec228e400088bbcaa5a98ebb52?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLUNNswlIxnG4JJTnhlsCwyiZhsMPOZdsbYVARCdtaOCdwYNGd9oapzhC1faImV3BURkde0DPwOmGk~QmhnpNSHwGZGGvjSsRqYsD790IxianFpfRaVab4VT3vNWuAxdhS-ocpwEjfoLNTvrgwFwADcPQFJ37scY9OxmDxKYG3sPk~gMKtSOwURLkCQdkNNeNS3-0d9nPPcv8AHA32UR3u1VR-FqgYGgrMo3rJtJTtpgDp9IY2jeEPeJwyS3sfBTU5P6mn26u6wbE6~226-wIdA7xFneHBpfR0tngc3L0FeB9IzOQ2h184ACD4xK3o8nLvC8iWbUs6r1ZXhbq17SCw__",
    color: "#E41728",
    textColor: "white",
  },
  {
    id: "7",
    title: "Unlimited SMS and Email Reminders, Notifications, and Marketing",
    description:
      "Stay connected with your customers effortlessly with unlimited SMS and email options. Send reminders for upcoming bookings, real-time notifications, and targeted marketing emails to keep your audience engaged and informed, all without limits. Boost customer satisfaction and retention while promoting your brand effectively via your own business email.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/fb9a/2ff5/43923e92e567b55c1eb57b9c2f55b30d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZHbVqVpa9g0rh-yTJyNB5FdhkqkBy3esQVS~rs1V9GlDvkQYLugYyYbUfrSgznhwaR8fRidCeYFmXs8k51OWD~oYBvsMhW7cvwUE8cJNUvH5fCbeKLPGL4556kVWmgA~nMEAVwNciyq8Wrypo~nHnrTIxWBhCm~X4FVXD~K-U1XmOUUbJALT2-x5NJ-fewHW5ODQhlawPRkzYNDxyJvxhTPQBzsbdHjiOXEz~6CtyYCcSnF73XHLeA6OmFOP~xmVFK498Y1Vhtvrnt1cmcjPObdGfGXL7SXdtS-C1jVsP02ZKjuCSBM5-4PwcC4ffSldvzAA6gg8D5vk2VEvIjIWQQ__",
    color: "#EFFCFA",
    textColor: "#101828",
  },
  {
    id: "8",
    title:
      "Create an Attractive and Customized Booking Page with your own domain",
    description:
      "Give your customers a seamless booking experience by personalizing your booking page. Customize colors, layout, and branding to reflect your business’s unique style, and add features like easy navigation, clear time slots, and engaging visuals to make booking effortless and enjoyable. Even build own website with custom domain.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/5664/d78f/dac82411e87eda0180ed47800f4d206b?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qIs9MByrbTGyJBQhUV6Aj-cumHK8CRaSTmpIMZ6VjEe2naIYr8rgGamSEYAsZ3J6ihub6OMBmvYQRLiXh7pn9Gzs~Kve0riGs1-FUNQ3RzsNNzdaHfoirAeoiac2n2SpBGE2tzQUDbItnVDh8ASjT9XrlVu0uU3swaHWBADWr1b0usx05wqtkizZSCkRj-r~HhOYo8O-cYAbaCE9OmMHsDh1dZfrDiSX3yrSmQPxBX9YMHiEn-U26k-53lUA~ia528sKUc1lZzSrdRK4xc~Wlvhk3rdzFNq1R~pJJBeyf8huyiV8UKZopELowWOn3PiayRZAbutVO-CKzuqOPijBiA__",
    color: "#19525A",
    textColor: "white",
  },
  {
    id: "9",
    title: "Comprehensive Dashboard with Real-Time Data Insights",
    description:
      "Access a powerful dashboard with real-time data visualization to monitor key metrics, track performance, and make instant, informed decisions. Gain valuable insights with dynamic charts and analytics, all in one intuitive interface.",
    imgSrc:
      "https://s3-alpha-sig.figma.com/img/e20e/fb95/06932956388144b66f4088fbef098516?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jpo4gIbQ2HwzMSh6lodvMMQ85kwRWpezWq4~ZxWztEa2-9A4w~vnRawqPG~pClwrh~SOkfKVM4rm7W64Xdj5a646YdepNXzWT92NjdQadPcgoRaOhtZzON45MxJogLkeUVbKApNAXCHEVd-WMNmD2HtQ76PqkXGo8~60q4ZnPQG5ADPj0JGq9Av5fYERA8B91TXB6BCuXz7lMGPmExnyJTCwWJvTr7uTUn3Mp1D7oK2ZlIWueoLGEYgmI2RshFCt1t7a6OuygaErF8unAOwSdPmQcf1-WHwViE28mG4gwJR8SPX1HbwLcXNofRoLlB42ONTs7jPgKuN8RnW5alHZCA__",
    color: "#FCF8EF",
    textColor: "#101828",
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
