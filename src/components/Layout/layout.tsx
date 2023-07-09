import { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface LayoutProps {
    children: ReactNode;
  }
  
  export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
        <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
