import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import { Source_Code_Pro } from "next/font/google";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
// import Contact from "./contact";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="container">
      <Homepage/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </div>
  );
}
