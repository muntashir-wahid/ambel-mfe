import Hero from "./components/Hero/Hero";

import TopNav from "host/TopNav";
import Partners from "./components/Partners/Partners";
import Features from "./components/Features/Features";
import BookAppointments from "./components/BookAppointments/BookAppointments";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Hero />
      <Partners />
      <Features />
      <BookAppointments />
    </div>
  );
};

export default Home;
