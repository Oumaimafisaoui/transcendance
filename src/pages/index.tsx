import Image from 'next/image'
import Homepage from './homepage.tsx'
import Navbar from '../../src/components/navbar/Navbar.tsx'
import Footer from '../../src/components/footer/Footer.tsx'
import { Source_Code_Pro } from 'next/font/google'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })
export default function Home() {
  return (
    <div className='container'>
        <Navbar / >
           
          
        <Homepage/>
        <Footer / >
        </div>
  )
}
