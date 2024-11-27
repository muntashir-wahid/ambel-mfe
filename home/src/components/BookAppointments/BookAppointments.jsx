import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";

import styles from "./BookAppointments.module.css";
import { Link } from "react-router-dom";

const lookingForTags = [
  "Doctor",
  "Lawyer",
  "Therapist",
  "Barber",
  "Spa",
  "Med Spa",
  "Psychiatrist",
  "Consultancy firm",
];

const BookAppointments = () => {
  return (
    <section className={styles["appointments-container"]}>
      <h2 className={styles["appointments-heading"]}>
        Find and Book Appointments with Local and International Professionals
      </h2>

      <form className={styles["appointments-form"]}>
        <div className={styles["input-wrapper"]}>
          <CiSearch
            color="#101828"
            size={22}
            className={styles["input-icon"]}
          />
          <input
            placeholder="Search Doctor, Therapist, Consultant, Spa"
            className={styles.input}
            type="text"
          />
        </div>
        <div className={styles["input-wrapper"]}>
          <IoLocationOutline
            color="#101828"
            size={22}
            className={styles["input-icon"]}
          />
          <input
            placeholder="Select your location"
            className={styles.input}
            type="text"
          />
        </div>
        <button type="button">Search</button>
      </form>

      <div className={styles["search-helpers"]}>
        <h5>Are you looking for</h5>

        <div className={styles["search-helpers-tags"]}>
          {lookingForTags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <Link to="#">
          Explore advance search <IoMdArrowForward />{" "}
        </Link>
      </div>
    </section>
  );
};

export default BookAppointments;
