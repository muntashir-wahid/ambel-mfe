import BookAppointments from "./components/BookAppointments/BookAppointments";
import Features from "./components/Features/Features";
import Footer from "host/Footer";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import Services from "./components/Services/Services";
import TopNav from "host/TopNav";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Hero />
      <Partners />
      <Features />
      <BookAppointments />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
