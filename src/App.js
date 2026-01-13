import "./App.css";
import Hoome from "./components/Home/Hoome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/index/About";
import Work from "./components/utility/Work";
import Blog from "./components/index/Blog";
import Services from "./components/utility/Services";
import Login from "./components/form/login";
import Signup from "./components/form/Signup";
import Productdet from "./components/Home/Productdet";
import Thanks from "./components/form/Thanks";
import Contact from "./components/index/Contact";
import Addtocart from "./components/Home/Addtocart";
import Errorpage from "./components/utility/errorpage.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hoome />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/productdet" element={<Productdet />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
          <Route path="/addtocart" element={<Addtocart />}></Route>
          <Route path="/error404" element={<Errorpage />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
