<head>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</head>;

import "./index.css";
import StickyNavbar from "./Header/Fixed-Navbar";
import Footer from "./Footer/Footer";
import Hero1 from "./Hero1/Hero1";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Card from "./Our-Services/card";

function App() {
  return (
    <>
      <StickyNavbar />
      <Hero1 />
      <Card />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
