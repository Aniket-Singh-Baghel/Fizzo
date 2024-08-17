import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Marqee from "./Components/marqee";
import './index.css'
function App() {
  return (
    <main className="w-full h-[100vh]">
      <Navbar />
      <Hero/>
      <Marqee />
    </main>
  );
}
export default App;
