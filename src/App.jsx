import { useRef } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./i18n";
import About from "./sections/about/About";
import Contacts from "./sections/conacts/Contacts";
import Work from "./sections/work/Work";

const App = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <Navbar aboutRef={aboutRef} workRef={workRef} contactRef={contactRef}/>
      <div className="section-wrapper">
        <About forwardedRef={aboutRef} />
        <Work forwardedRef={workRef} />
        <Contacts forwardedRef={contactRef} />
      </div>
      <Footer />
    </>
  );
};

export default App;
