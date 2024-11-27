import { SiStackblitz } from "react-icons/si";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { TbStack } from "react-icons/tb";

import styles from "./Packages.module.css";

import PackageCard from "./PackageCard";

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
    icon: <SiStackblitz />,
    price: 10,
    description: "10% from your customer payment",
  },
  {
    id: "2",
    title: "Practitioner",
    plans: [
      "All booking options",
      "All schedule Feature",
      "Individual single practitioner license",
      "3 staff members are allowed",
      "Unlimited email marketing",
    ],
    icon: <TbStack />,
    price: 39,
    description: "1 practitioner license/monthly",
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

    icon: <HiOutlineSquare3Stack3D />,
    price: 49,
    description: "Practitioner Number 10",
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
