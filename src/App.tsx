import Nav from "./components/Nav"
import Hero from "./components/Hero"
import PoweredBy from "./components/PoweredBy"
import Positioning from "./components/Positioning"
import BusinessAreas from "./components/BusinessAreas"
import Products from "./components/Products"
import DigitalMarketing from "./components/DigitalMarketing"
import Academy from "./components/Academy"
import RealEstate from "./components/RealEstate"
import WhatWeBuild from "./components/WhatWeBuild"
import SelectedWork from "./components/SelectedWork"
import HowWeWork from "./components/HowWeWork"
import Technology from "./components/Technology"
import DarkStatement from "./components/DarkStatement"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div style={{ backgroundColor: "#F7F5EF" }}>
      <Nav />
      <Hero />
      <PoweredBy />
      <Positioning />
      <BusinessAreas />
      <Products />
      <DigitalMarketing />
      <Academy />
      <RealEstate />
      <WhatWeBuild />
      <SelectedWork />
      <HowWeWork />
      <Technology />
      <DarkStatement />
      <FinalCTA />
      <Footer />
    </div>
  )
}
