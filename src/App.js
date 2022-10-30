import "./App.css";
import Navbar from "./Navbar";
import Kursus from "./Kursus";
// import Blog from "./Blog";
import Ulasan from "./Ulasan";
import TentangKami from "./TentangKami";
import WelcomePage from "./WelcomePage";
import Faq from "./Faq";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomePage />
      <TentangKami />
      <Kursus />
      {/* <Blog /> */}
      <Ulasan />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
