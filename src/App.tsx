import Header from "./sections/Header"
import Home from "./sections/Home"
import WhatIDo from "./sections/WhatIDo"
import HowItWorks from "./sections/HowItWorks"
import Footer from "./sections/Footer"


export default function App() {
  return (
    <div style={{background: "#EFEBEA"}}>
      <Header />
      <main>
        <Home />
        <WhatIDo />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
