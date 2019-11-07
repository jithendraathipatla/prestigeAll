import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import Hero from "./components/Herocomponent";
import Navigation from "./components/navbar";
import Card from "./components/card";
import Footer from "./components/Footer";
import Image1 from "../src/1.jpg";
import Image2 from "../src/2.jpeg";
import Image3 from "../src/3.jpg";
import Image4 from "../src/4.jpg";
import Image5 from "../src/5.jpg";
import Image6 from "../src/6.jpg";
import Image7 from "../src/7.jpg";
import Image8 from "../src/8.jpg";
import Image9 from "../src/9.jpg";
import Image14 from "../src/14.jpg";
import Image10 from "../src/10.jpg";
import Image11 from "../src/11.jpg";
import Image12 from "../src/12.jpg";
import Image13 from "../src/13.jpg";


const App = () => {
    const [state, setstate] = useState([
        {
            image:Image1,
            alt:"Prestige Song of the South",
            unit_type:"1,2,2.5,3,3.5,4 BHK",
            price:"40 Lakhs",
            towers:"16 Towers  G + 15,17,20 Floors",
            location:"Begur Road, Bangalore",
            posession:"2019 onwards",
            // link:"https://drive.google.com/open?id=13RanqpLEI3kXmVEoMW-CEX2cqxb4wa9q",
            brouchereName:"Download Prestige Song of the South Brouchere",
        },
        {
            image:Image2,
            alt:"prestige lake ridge",
            unit_type:"1,2& 3 BHk",
            price:"40 lakhs",
            towers:"12 Towers Devasthanagalu",
            location:"Devasthanagalu, Bangalore",
            posession:"2019 onwards",
            // link:" https://drive.google.com/open?id=1bwlqGWh49gKRN7CIQ0jq1KmbgnL8r6vQ",
            brouchereName:"Download prestige lake ridge Brouchere",
        },
        
        {
            image:Image4,
            alt:"Prestige Kew Gardens ",
            unit_type:"1,2 & 3 BHK",
            price:"94 Lakh",
            towers:"16 Towers G + 4 Floors",
            location:"Yemalur, Bangalore",
            posession:"2019 onwards",
            // link:"https://drive.google.com/open?id=1cAfW2ZMNwWGpGCwiQYhRXvH-1dHFwThs",
            brouchereName:"Download Prestige Kew Gardens Brouchere",
        },
        {
            image:Image8,
            alt:"Prestige Jindal City",
            unit_type:"1,2,3 & 4 BHk",
            price:"48 lakhs",
            towers:"15 Towers G + 27,28 Floors",
            location:"Tumkur Road, Bangalore East",
            posession:"2021 Onwards (P1)",
            //link:"https://drive.google.com/open?id=1TF_BvdQ9zaZXy61K-5yXha8Nv_U-CDbq",
            brouchereName:"Download Prestige Jindal City Brouchere",
        },
        {
            image:Image5,
            alt:"Prestige Elysian",
            unit_type:"2 Towers G + 16,18 Floors",
            price:"86 Lakhs",
            towers:"12 Blocks G+26 Floors",
            location:"Arekere, Bannerghatta Road",
            posession:"2022 onwards",
            // link:"https://drive.google.com/open?id=1gD1dqRdfmSLXclBQSC43a3VBY3CNOj84",
            brouchereName:"Download Prestige Elysian Brouchere",
        },
       
        {
            image:Image6,
            alt:"Prestige Willow Tree",
            unit_type:"1,2,3,3.5 BHK",
            price:"46 Lakhs",
            towers:"5 Towers G + 10,11 Floors",
            location:"Vidyaranyapura, Bangalore",
            posession:"2022 onwards",
            // link:"https://drive.google.com/open?id=1WksC2Rh9LkukLantUky7LCPuwaovZqhQ",
            brouchereName:"Download Prestige Willow Tree Brouchere",
        },
        {
            image:Image7,
            alt:"Prestige Botanique",
           unit_type:"3, & 3 BHk",
            price:"1.6 cr",
            towers:"1 Towers 2B+G+8 Floors",
            location:"RV Road, Bangalore ",
            posession:"2021",
            //link:"https://drive.google.com/open?id=1b3fYGDhhzFwxK1dk_Mj9XxaWna0tRbO6",
            brouchereName:"Download Prestige Botanique Brouchere",
        },
        
        {
            image:Image10,
            alt:"Prestige Park Square",
            unit_type:"2 & 3 BHk",
            price:"95 Lakhs",
            towers:"3 Towers 3B + G + 27 Floors",
            location:"Bannerghatta Road, Bangalore North",
            posession:"2021",
           // link:"https://drive.google.com/open?id=1OeeSldqfbpZXplUOwWiAWsCg3O1zromP",
            brouchereName:"Download Prestige Park Square Brouchere",
        },

        {
            image:Image11,
            alt:"Prestige Fontaine Bleau",
            unit_type:"2 & 3 BHk",
            price:"83 Lakhs",
            towers:"2 Tower G + 10 Floors",
            location:"Whitefield, Bangalore",
            posession:"2021",
            //link:"https://drive.google.com/open?id=117wcyJb8K-gXHMH4ekOCze21axWA9iqX",
            brouchereName:"Download Prestige Fontaine Bleau Brouchere",
        },
        {
            image:Image12,
            alt:"Prestige Dolce Vita",
           unit_type:"2 & 3 BHk",
            price:"94 lakhs",
            towers:"2 Towers G + 7,8 Floors",
            location:"Whitefield, Bangalore ",
            posession:"2021 onwards",
            //link:"https://drive.google.com/open?id=1gQjBmCJWfZyXE2TY9EeKeJFoisZzdN20",
            brouchereName:"Download Prestige Dolce Vita Brouchere",
        },
       
        {
            image:Image14,
            alt:"Prestige Brooklyn Heights",
            unit_type:"1 2 & 3 BHk",
            price:"66 Lakhs",
            towers:"12 Blocks G+26 Floors",
            location:"Banashankari Bangalore",
            posession:"2021 onwards",
            // link:"https://drive.google.com/open?id=1JmstNKv4SmlSJNp-DduTnkufTNjOP9m6",
            brouchereName:"Download Prestige Brooklyn Heights Brouchere",
        },
        
        {
            image:Image3,
            alt:"Brigade Bricklane",
            unit_type:"1 & 2 BHk",
            price:"54 Lakhs",
            towers:"7 Blocks G+4 Floors",
            location:"Jakkur, Bangalore north",
            posession:"2021 onwards",
            link:"https://drive.google.com/open?id=1_jEzTFqJ43p0X9PZMPuF51HLlXOhJpYA",
            brouchereName:"Download Brigade Bricklane Brouchere",
        },
        {
            image:Image9,
            alt:"Brigade Pulmeria",
            unit_type:"1,2 & 3 BHk",
            price:"54 Lakhs",
            towers:"14 Blocks G+8 Floors",
            location:"Kanakapur Road,Bangalore ",
            posession:"Ready to move",
            link:"https://drive.google.com/open?id=1qSCOThM5_xGc18fiSg572URrbR7HmDjn",
            brouchereName:"Download Brigade Pulmeria Brouchere",
        },
        {
            image:Image13,
            alt:"Brigade Woods",
            unit_type:"1,2 & 3 BHk",
            price:"90 Lakhs",
            towers:"G+4 Floors",
            location:"Whitefield, Itpl ,Bangalore",
            posession:"2021 onwards",
            link:"https://drive.google.com/open?id=1eL7O7cpfI6_8hM2-0KshziUDZcs3Zc0L",
            brouchereName:"Download Brigade Woods Brouchere",
        },

    ]);
    let image="";
    const displayingcards=() => {
          return(
              state.map((item, i)=>{
                  return(
                      <div key={i}>
                          <Card card={item.image} card2={item.alt} card3={item.price} card4={item.posession} card5={item.towers} card6={item.location}/>
                      </div>
                  )
              })
          )
    }

    return (
          <div>
              <Navigation/>
              <Hero/>
              <div className="cardgrid">
                {displayingcards()}
              </div>
              
              <Footer/>

          </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));
