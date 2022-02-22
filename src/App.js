import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Resume from "./Components/Resume";
import Domains from "./Components/Domains";
import Projects from "./Components/Projects";
function App() {

  return (
    <div>
      <Navbar/>
      <About/>
      <Resume/>
      <Domains/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
