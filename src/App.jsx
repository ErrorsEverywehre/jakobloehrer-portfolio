import "./App.scss";
import SectionTitle from "./common/sectionTitle/SectionTitle";
import TextBox from "./common/textBox/TextBox";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const App = () => {
 return ( <>
<Navbar />
<p></p>
<SectionTitle title="test"/>
<p></p>
<TextBox title="title" text="Wir verwenden Cookies und andere Technologien auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Personenbezogene Daten können verarbeitet werden (z. B. IP-Adressen), z. B. für personalisierte Anzeigen und Inhalte oder Anzeigen- und Inhaltsmessung. Weitere Informationen über die Verwendung Ihrer Daten finden Sie in u"/>
<p></p>
<Footer /> </>
    )
  }


  export default App
