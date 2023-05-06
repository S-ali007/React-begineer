import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App  ">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          <Route path="*" element={<Error></Error>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
