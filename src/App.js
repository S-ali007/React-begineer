import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import About from "./Components/About";
import Error from "./Components/Error";
import User from "./Components/User";
import UserDetails from "./Components/UserDetails";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
          <Route
            path="/user"
            element={
              <>
                <Header />
                <User />
              </>
            }
          />
          <Route
            path=":userId"
            element={
              <>
                <Header />
                <UserDetails />
              </>
            }
          />

          {/* <Route path="*" element={<Error></Error>} /> */}
          {/* OR */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
