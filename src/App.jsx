import "./App.css";
import CountdownAlert from "./components/CountdownAlert";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import AboutAuthor from "./components/AboutAuthor";
import KeyBenefits from "./components/KeyBenefits";
import AnimatedStats from "./components/AnimatedStats";
import WebinarRegistration from "./components/WebinarRegistration";
import Reviews from "./components/Reviews";
import WhyRegister from "./components/WhyRegister";
import Footer from "./components/Footer";
import VideoReviews from "./components/VideoReviews";

function App() {
  return (
    <>
      <CountdownAlert />
      <Hero />
      <Introduction />
      <AboutAuthor />
      <KeyBenefits />
      <AnimatedStats />
      <Reviews />
      <VideoReviews />
      <WebinarRegistration />
      <WhyRegister />
      <Footer />
    </>
  );
}

export default App;
