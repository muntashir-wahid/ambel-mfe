import styles from "./Pricing.module.css";

import TopNav from "host/TopNav";
import Features from "home/Features";
import Hero from "./components/Hero/Hero";
import Packages from "./components/Packages/Packages";
import FreeTrial from "./components/FreeTrial/FreeTrial";
import Support from "./components/Support/Support";

const Pricing = () => {
  return (
    <div>
      <TopNav />
      <Hero />
      <Packages />
      <FreeTrial />
      <Features />
      <Support />
    </div>
  );
};

export default Pricing;
