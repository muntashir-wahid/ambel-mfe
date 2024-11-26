import styles from "./Pricing.module.css";

import TopNav from "host/TopNav";
import Features from "home/Features";
import Hero from "./components/Hero/Hero";
import Packages from "./components/Packages/Packages";
import FreeTrial from "./components/FreeTrial/FreeTrial";

const Pricing = () => {
  return (
    <div>
      <TopNav />
      <Hero />
      <Packages />
      <FreeTrial />
      <Features />
    </div>
  );
};

export default Pricing;
