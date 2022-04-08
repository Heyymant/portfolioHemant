import React from 'react'
import { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
import "../work/work.scss"
import {
  researchPortfolio,
  techPortfolio,
  designPortfolio
} 
from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("research");
  const [data, setData] = useState([]);
  const [currentSlide , setCurrentSlide] = useState(0);
  const list = [
    {
      id: "research",
      title: "Research"
    },
    
    {
      id: "tech",
      title: "Tech"
    },
    {
      id: "design",
      title: "Design"
    },
  ];

  useEffect(()=>{
    switch(selected){
      case "research":
        setData(researchPortfolio);
        break;
      case "tech":
        setData(techPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(researchPortfolio);
    }
  },[selected])

const  handleClick =(way) => {
  way === "left"
  ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 :7)
  : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
};

  return (
    <div className="portfolio" id='portfolio'>
      <h1>Projects</h1>
      <ul>
        {list.map((item)=> (
          <PortfolioList 
          title= {item.title}
          active = {selected === item.id}
          setSelected = {setSelected}
          id = {item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=> (
          <div className="item">
          <img src ={d.img}/>
          <a href={d.a} onClick={() => handleClick()} >{d.title}</a>
        </div>
       ) )}
      </div>
    </div>
  )
}
