import { BrowserRouter, Route, Routes } from "react-router-dom";

// ----All Pages----
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <>
      <div className="font-display">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
