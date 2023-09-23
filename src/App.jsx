import { BrowserRouter, Route, Routes } from "react-router-dom";

// ----All Pages----
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurWork from "./Pages/OurWork";
import Process from "./Pages/Process";
import Blog from "./Pages/Blog";
import FutureOfWebDevelopment from "./Pages/FutureOfWebDevelopment";
import Lessons from "./Pages/3 Lessons";
import ShortGuide from "./Pages/ShortGuide";

function App() {
  return (
    <>
      <div className="font-display overflow-x-hidden bg-black">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/process" element={<Process />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/future-of-web-development"
              element={<FutureOfWebDevelopment />}
            />
            <Route
              path="/blog/3-lessons-we-learned-going-back-to-the-office"
              element={<Lessons />}
            />
            <Route
              path="/blog/a-short-guide-to-component-naming"
              element={<ShortGuide />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
