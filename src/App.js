import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";
import Userdetail from "./Components/Userdetail";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Output from "./Components/Output";
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
                <Home ></Home>
              </>
            }
          >
           
            </Route> 
            <Route path="/home/:userId" element={ <>
                <Header />
               <Userdetail></Userdetail>
              </>}/>
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
          {/* OR */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
