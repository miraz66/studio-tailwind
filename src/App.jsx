import { BrowserRouter, Route, Routes } from "react-router-dom";

// ----All Pages----
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurWork from "./Pages/OurWork";
import Process from "./Pages/Process";

function App() {
  return (
    <>
      <div className="font-display">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
