import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import HowitWorks from "./Components/HowitWorks/HowitWorks";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <HowitWorks/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
