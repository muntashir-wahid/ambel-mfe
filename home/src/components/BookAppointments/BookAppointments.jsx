import styles from "./BookAppointments.module.css";

const BookAppointments = () => {
  return (
    <section className={styles["appointments-container"]}>
      <h2 className={styles["appointments-heading"]}>
        Find and Book Appointments with Local and International Professionals
      </h2>

      <form className={styles["appointments-form"]}>
        <input
          placeholder="Search Doctor, Therapist, Consultant, Spa"
          className={styles.input}
          type="text"
        />
        <input
          placeholder="Select your location"
          className={styles.input}
          type="text"
        />
        <button>Search</button>
      </form>

      <div>
        <p>Are you looking for</p>
      </div>
    </section>
  );
};

export default BookAppointments;
