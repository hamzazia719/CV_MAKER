import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./componenets/Home/Home";
import About from "./componenets/pages/About";
import Pricing from "./componenets/pages/Pricing";
import Contact from "./componenets/pages/Contact";
import Template from "./componenets/form_all_data/steps";
const Routee = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/price" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/templete" element={<Template />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Routee;
