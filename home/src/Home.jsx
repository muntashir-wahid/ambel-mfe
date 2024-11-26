import Hero from "./components/Hero/Hero";

import TopNav from "host/TopNav";
import Partners from "./components/Partners/Partners";
import Features from "./components/Features/Features";
import BookAppointments from "./components/BookAppointments/BookAppointments";
import Services from "./components/Services/Services";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Hero />
      <Partners />
      <Features />
      <BookAppointments />
      <Services />

      {/* <TopNav />
      <Hero />
      <Partners />
      <Features /> */}
    </div>
  );
};

export default Home;
