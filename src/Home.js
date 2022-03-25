import { useState } from "react";
import Navbaritems from "./Navbaritems";
let itm = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "breakfast",
    price: 15,
    img: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 17,
    img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 10,
    img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "breakfast",
    price: 25,
    img: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 15,
    img: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 50,
    img: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 7,
    title: "Bacon Overflow",
    category: "breakfast",
    price: 15,
    img: "https://react-projects-5-menu.netlify.app/images/item-7.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 8,
    title: "American Classic",
    category: "Lunch",
    price: 15,
    img: "https://react-projects-5-menu.netlify.app/images/item-8.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 20,
    img: "https://react-projects-5-menu.netlify.app/images/item-9.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
];
let allcategory = new Set(itm.map((catgry) => catgry.category));
console.log(allcategory);
const Home = () => {
  const [dataitems, setdataitems] = useState(itm);
  const [categri, setcategri] = useState(allcategory);

  const filteritems = (item) => {
    if (item === "All") {
      setdataitems(itm);
      return;
    }
    const newdataitems = itm.filter((dtitm) => dtitm.category === item);
    setdataitems(newdataitems);
  };
  return (
    <div className="home">
      <div className="navbar">
        <Navbaritems
          dataitems={dataitems}
          filteritems={filteritems}
          categri={categri}
        />
      </div>
      <div className="menudata">
        <div className="menuitems">
          {dataitems.map((dataitem) => {
            return (
              <div>
                <div className="menu-items">
                  <div className="image">
                    <img src={dataitem.img} />
                  </div>
                  <div className="item-info">
                    <header>
                      <h4>{dataitem.title}</h4>
                      <h4>${dataitem.price}</h4>
                    </header>
                    <p className="item-text">{dataitem.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
