import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/contacts/Contacts";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen , setMenuOpen] = useState(false)
  const [currentSlide , setCurrentSlide] = useState(0);

  return (
    <div className="app">
     <Topbar menuOpen ={menuOpen} setMenuOpen ={setMenuOpen}/> 
     <Menu menuOpen ={menuOpen} setMenuOpen ={setMenuOpen}/>
     <div className="sections">
       <Intro/>
      <Portfolio/>
       <Work/>

       <Contacts/>
     </div>
    </div>
  );
}

export default App;
