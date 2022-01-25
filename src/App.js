// import './App.css';
import "./Style.css";
import { DisplayItems } from "./DisplayItems";
import { Menu } from "./Menu";
import { SideItems } from "./SideItems";
import { useState } from "react";
// import Button from '@mui/material/Button';
import { Switch, Route, useParams, Link } from "react-router-dom";

function App() {
  const productItems = [
    {
      proImage:
        "https://m.media-amazon.com/images/I/71r69Y7BSeL._AC_UL320_.jpg",
      proName: "Galaxy M12",
      proRatings: "8",
      proSummary:
        "Samsung Galaxy M12 (Black,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate",
      proPrice: "11,499",
    },
    {
      proImage:
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL320_.jpg",
      proName: "Samsung Galaxy S20 FE 5G",
      proRatings: "8",
      proSummary:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      proPrice: "39,990",
    },
    {
      proImage:
        "https://m.media-amazon.com/images/I/61--zZV5y-L._AC_UL320_.jpg",
      proName: "Samsung Guru Music 2",
      proRatings: "6",
      proSummary: "Samsung Guru Music 2 (SM-B310E, Black)",
      proPrice: "2,235",
    },
    {
      proImage:
        "https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UL320_.jpg",
      proName: "Apple iPhone 12 Pro",
      proRatings: "8",
      proSummary: "Apple iPhone 12 Pro (256GB) - Graphite",
      proPrice: "50,000",
    },
    {
      proImage:
        "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_UL320_.jpg",
      proName: "Apple iPhone 13",
      proRatings: "8",
      proSummary: "Apple iPhone 13 Pro (128GB) - Gold",
      proPrice: "99,000",
    },
    // {
    //   proImage: "",
    //   proName: "myName",
    //   proRatings: "8",
    //   proSummary: "Am summary",
    //   proPrice: "99",
    // },
    // {
    //   proImage: "",
    //   proName: "myName",
    //   proRatings: "8",
    //   proSummary: "Am summary",
    //   proPrice: "99",
    // },
    // {
    //   proImage: "",
    //   proName: "myName",
    //   proRatings: "8",
    //   proSummary: "Am summary",
    //   proPrice: "99",
    // },
    // {
    //   proImage: "",
    //   proName: "myName",
    //   proRatings: "8",
    //   proSummary: "Am summary",
    //   proPrice: "99",
    // },
  ];
  const [cartVal, setCartVal] = useState(0);

  return (
    <div className="App">
      
      <ul>
        {/* <li>
          <Link to="/cartitems">cartitesm</Link>
        </li> */}
        <li>
          <Link to="/home">home</Link>
        </li>
      </ul>
      <Switch>
      <Route path="/cartitems/:index">
          <h1>testingdddd</h1>
          <Cartitems />
        </Route>
        
        <Route path="/home">
          <Menu cartVal={cartVal} />

          <div className="items-cointainer-flex">
            <div className="side-items-container-flex">
              <SideItems />
            </div>

            <div className="display-items-container-flex">
              {productItems.map((itms, index) => (
                <DisplayItems
                  index={index}
                  proImage={itms.proImage}
                  proName={itms.proName}
                  proRatings={itms.proRatings}
                  proSummary={itms.proSummary}
                  proPrice={itms.proPrice}
                  setCartVal={setCartVal}
                  cartVal={cartVal}
                />
              ))}
            </div>
          </div>
        </Route>
      </Switch>
      {/* <Button variant="contained">Hello World</Button> */}
    </div>
  );
}

function Cartitems() {
  const { index } = useParams();
  return <div>test {index}</div>;
}

export default App;
