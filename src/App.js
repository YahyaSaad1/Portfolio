import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/1-header/Header";
import Hero from "./Components/2-hero/Hero";
import Main from "./Components/3-main/Main";
import Contact from "./Components/4-contact/Contact";
import Footer from "./Components/5-footer/Footer";

function App() {
  const[showScroll, SetShowScroll] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 200){
        SetShowScroll(true);
      } else{
        SetShowScroll(false);
      }
    })
  }, [])
  return (
    <div id="up" className="container">
      <Header/>
      <Hero/>
      <div className="divider"/>
      <Main/>
      <div className="divider"/>
      <Contact/>
      <div className="divider"/>
      <Footer/>
      <a style={{opacity: showScroll? 1: 0, transition:'1s'}} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;