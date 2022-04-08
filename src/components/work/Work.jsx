import React from 'react'
import "./work.scss"
import {
  workData
} 
from "../../data";
import { useState ,useEffect} from 'react';



export default function Work() {
  const [currentSlide , setCurrentSlide] = useState(0);


  const data = [
    
    {
        id: "hallEffect",
        title : "Fractional Quantum Hall Effect",
        desc : "Research Project",
        material : "The text",
        img : "assets/hall effect.jpg",
        n : 1,
    },
     {
        id: "d2nn",
        title : "Deep Neural Network",
        desc : "ML Project",
        material : "The text",
        img : "assets/d2nn2.png",
        n :2,
    },
    {
        id: "sos",
        title : "Quantum Field Theory",
        desc : "Institute Summer Of Science Project",
        material : "The text",
        img : "assets/qft.jpg",
        n :3,
    },
    {
        id: "xlr8",
        title : "XLR8",
        desc : "Technical Project",
        material : "The text",
        img : "assets/xlr8.jpg",
        n :4,
    },
    {
        id: "program",
        title : "ProgArm",
        desc : "Course Project",
        material : "The text",
        img : "assets/program.jpg",
        n : 5,
    },
    {
        id: "digital",
        title : "Digital Systems",
        desc : "Course Project",
        material : "The text",
        img : "assets/adder.jpg",
        n: 6,
    },
    {
        id: "nccDes",
        title : "Content Creation for NCC",
        desc : "Designing",
        material : "The text",
        img : "assets/content.jpg",
        n : 7,
    },
    {
        id: "epDept",
        title : "Department Jacket and etc.",
        desc : "Designing",
        material : "The text",
        img : "assets/back2.png",
        n :8,
    },
    
];

// const ids = data.map((s)=> s.id);

//  useEffect(()=>{
//     switch(ids){
//       case 'hallEffect':
//         setSlide("hallEffect");
//         break;
//       case "d2nn":
//         setSlide('d2nn');
//         break;
//       case "sos":
//         setSlide('sos');
//         break;
//       default:
//         setSlide("hallEffect");
//     }
//   },[ids])

// console.log(handleClick());
const  handleClick =(way) => {
  way === "left"
  ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 :7)
  : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
};
console.log(currentSlide);
  return (
    <div className="work" id="work">
      <div className="slider"  style={{transform : `translateX(-${currentSlide * 100}vw)`}}>
           {data.map((d) => ( 
          <div className="container" id= {d.id}  >
            <h>{d.title}</h>
            <h2>{d.desc}</h2>
            <div className="item"  >
              {/* <img src={d.img}  /> */}
              <img src = {d.img} /> 
              
               <div className="content">
                {/* <h1>{d.title}</h1>
                <h3>{d.desc}</h3> */}
                <p>{d.material}</p>
              </div> 
            </div>
        </div>
         ))} 
      </div>
      <img src="assets/arrow.png" className="arrow left"  alt='' onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right"  alt='' onClick={() => handleClick()}/>
    </div>
  )
}
