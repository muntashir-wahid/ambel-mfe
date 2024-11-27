import TopNav from "host/TopNav";
import Footer from "host/Footer";
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
      <Footer />
    </div>
  );
};

export default Pricing;
