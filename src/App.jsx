import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import WhyChoose from "./components/WhyChoose";
import Approach from "./components/Approach";
import Guiding from "./components/Guiding";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Home />
      <Section />
      <WhyChoose />
      <Approach />
      <Guiding />
      <AboutUs />
    </div>
  );
}

export default App;
