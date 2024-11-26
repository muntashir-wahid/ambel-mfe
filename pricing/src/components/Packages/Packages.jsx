import PackageCard from "./PackageCard";
import styles from "./Packages.module.css";

const packages = [
  {
    id: "1",
    title: "Pay As You Go",
    plans: [
      "Only pre-paid booking",
      "Both practitioner and Organization",
      "Up to 5 practitioners in organization",
      "2 staff members are allowed",
      "Basic chat and email support",
    ],
  },
  {
    id: "3",
    title: "Practitioner",
    plans: [
      "All booking options",
      "All schedule Feature",
      "Individual single practitioner license",
      "3 staff members are allowed",
      "Unlimited email marketing",
    ],
  },
  {
    id: "3",
    title: "Enterprise",
    plans: [
      "All booking options",
      "Only for Organization",
      " Unlimited practitioners and staff",
      "Customizable 6 page website",
      "E-commerce functionality",
    ],
  },
];

const Packages = () => {
  return (
    <div className={styles["packages-container"]}>
      {packages.map((packageItem) => (
        <PackageCard key={packageItem.id} packageItem={packageItem} />
      ))}
    </div>
  );
};

export default Packages;
