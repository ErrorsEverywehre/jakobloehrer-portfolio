import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="section-wrapper">
        <About />
      </div>
      <Footer />
    </>
  );
};

export default App;
