import BasicCard from "./Components/Card";
import ResponsiveAppBar from "./Components/Navbar";
import "./App.css";
import SimplePaper from "./Components/BoxCard";
import Coments from "./Components/BigCard";
import SimplePaper2 from "./Components/BoxCard2";
import SimplePaper3 from "./Components/TextComponent";
import SimplePaper4 from "./Components/TextComponents2";
import SimplePapernext from "./Components/Cost";
import What from "./Components/what";
import SimplePaperblog from "./Components/Blog";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <div className="back">
        <BasicCard />
        <ResponsiveAppBar />
        <SimplePaper />
      </div>
      <Coments />
      <div className="back2">
        <SimplePaper2 />
      </div>
      <SimplePaper3 />
      <What />
      <SimplePaper4 />
      <SimplePapernext />
      <SimplePaperblog />
      <Footer />
    </div>
  );
}

export default App;
