import Hero from "./components/Hero/Hero";

import TopNav from "host/TopNav";
import Partners from "./components/Partners/Partners";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Hero />
      <Partners />
    </div>
  );
};

export default Home;
