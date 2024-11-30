import { useEffect, useRef } from "react";
import "./App.scss";
import IframeModal from "./common/iframeModal/IframeModal";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./i18n";
import About from "./sections/about/About";
import Contacts from "./sections/conacts/Contacts";
import Work from "./sections/work/Work";
import { Route, Routes, useLocation } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";

const App = () => {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToWork) {
      workRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="app">
      <div className="background"></div>
      <Navbar aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <div className="section-wrapper">
        <About forwardedRef={aboutRef} />
        <Work forwardedRef={workRef} />
        <Contacts forwardedRef={contactRef} />
      </div>
      <Footer />
    </div>



  );
};

export default App;
