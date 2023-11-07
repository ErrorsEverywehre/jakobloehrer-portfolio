import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./i18n";
import About from "./sections/about/About";
import Contacts from "./sections/conacts/Contacts";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="section-wrapper">
        <About />
        <Contacts />
      </div>
      <Footer />
    </>
  );
};

export default App;
