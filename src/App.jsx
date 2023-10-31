import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/about/About";

const App = () => {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default App;
