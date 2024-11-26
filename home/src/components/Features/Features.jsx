import { IoCalendarOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlinePayment, MdOutlineTrackChanges } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { TfiStatsUp } from "react-icons/tfi";
import { GoStack } from "react-icons/go";

import styles from "./Features.module.css";

import FeatureCard from "./FeatureCard";

const features = [
  {
    id: "1",
    title: "Schedule & Booking",
    icon: <IoCalendarOutline size={20} />,
    description:
      "Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
  },
  {
    id: "2",
    title: "Live Consultant",
    icon: <CiVideoOn size={20} />,
    description:
      "Integrate meet, zoom and loom to   communicate with your customers or clients in via video conference.",
  },
  {
    id: "3",
    title: "Payments",
    icon: <MdOutlinePayment size={20} />,
    description:
      "Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere.",
  },
  {
    id: "4",
    title: "Customer Tracking",
    icon: <MdOutlineTrackChanges size={20} />,
    description:
      "Manage customer, send marketing email and message, create, records and track via note, case study.",
  },
  {
    id: "5",
    title: "Notification",
    icon: <IoMdNotificationsOutline size={20} />,
    description:
      "Automatically notify your clients and practitioners with reminder vis SMS and email by single setup.",
  },
  {
    id: "6",
    title: "Website Builder",
    icon: <BsCalendar2Event size={20} />,
    description:
      "Get a free website, design and customize your booking website for your business without any code.",
  },
  {
    id: "7",
    title: "Reports",
    icon: <TfiStatsUp size={20} />,
    description:
      "Powerful data and graphs at your fingertips to monitor day to day activities and generate reports.",
  },
  {
    id: "8",
    title: "Resources",
    icon: <GoStack size={20} />,
    description:
      "Create and share resources like Prescriptions, Documentations, Medical Charts and Videos.",
  },
];

const Features = () => {
  return (
    <section className={styles["features-container"]}>
      <div className={styles["features-content"]}>
        <header className={styles["features-header"]}>
          <p className={styles["features-header-tag"]}>Features</p>
          <h3 className={styles["features-header-title"]}>
            Solve all your needs with a single software solution
          </h3>
          <p className={styles["features-header-para"]}>
            This platform streamlines the entire customer management process,
            saving businesses time and increasing efficiency. Trusted by over
            60+ businesses.
          </p>
        </header>
        <div className={styles["features-card-container"]}>
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
