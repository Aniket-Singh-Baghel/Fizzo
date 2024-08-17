import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Marqee from "./Components/marqee";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";
import Flavours from "./Components/Flavours";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main className="bg-[#E8F5E9]">
      <Navbar />
      <Hero />
      <Marqee />
      <Flavours/>
    </main>
  );
}
export default App;

