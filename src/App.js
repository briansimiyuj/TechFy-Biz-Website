import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Navigation from "./components/Navigation";
import Services from "./components/Services";



function App() {
  return (
    <div className="App">
      <Navigation />
      <ImageSlider />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
