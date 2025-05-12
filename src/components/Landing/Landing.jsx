import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Eurobot from "./Eurobot";
import Home from "./Home";
import Partners from "./Partners";
import Sponsoring from "./Sponsoring";
import Team from "./Team";

function Landing() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Eurobot />
      <Team />
      <Sponsoring />
      <Partners />
      <Contact />
    </div>
  );
}

export default Landing;
