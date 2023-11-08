import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./i18n";
import About from "./sections/about/About";
import Contacts from "./sections/conacts/Contacts";
import Work from "./sections/work/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="section-wrapper">
        <About />
        <Work />
        <Contacts />
      </div>
      <Footer />
    </>
  );
};

export default App;
