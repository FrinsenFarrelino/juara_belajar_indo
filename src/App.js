import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Kursus from "./Kursus";
import Blog from "./Blog";
import Ulasan from "./Ulasan";
import TentangKami from "./TentangKami";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <WelcomePage />
      <Kursus />
      <Blog />
      <Ulasan />
      <TentangKami />
    </div>
  );
}

export default App;
