// import './App.css';
import "./Style.css";
import { Menu } from "./Menu";
import { useState } from "react";
// import Button from '@mui/material/Button';
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { ViewProductInfo } from "./ViewProductInfo";

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
  
  // const [cartItems, setCartItems] = useState([]);
  const [cartInfo, setcartInfo] = useState([]);

// console.log(cartInfo);

  return (
    <div className="App">
      <Switch>
        <Route path="/productdetails/:index">
          <Menu cartVal={cartInfo.length} />
          <ViewProductInfo
            productList={productItems}
            cartInfo={cartInfo}
            setcartInfo={setcartInfo}
          />
        </Route>

        <Route path="/cartitems">
          <Menu cartVal={cartInfo.length} />
          <CartItems
            getCartItems={cartInfo}
            cartVal={cartInfo.length}
          />
        </Route>

        <Route path="/home">
          <Menu cartVal={cartInfo.length} />
          <HomePage
            productItems={productItems}
            cartInfo={cartInfo}
            setcartInfo={setcartInfo}
          />
        </Route>
        <Route path="/">
          <Menu cartVal={cartInfo.length} />
          <HomePage
            productItems={productItems}
            cartInfo={cartInfo}
            setcartInfo={setcartInfo}
          />
        </Route>
      </Switch>
    </div>
  );
}

function CartItems({ getCartItems, cartVal }) {
  return (
    <div className="cart-container">
      <h1>Total items in cart - {cartVal}</h1>
      {/* {getCartItems.map((itms, index) => (
        <DisplayCartItems cartList={itms} index={index} />
      ))} */}
    </div>
  );
}

function DisplayCartItems({ cartList, index }) {

  return (
    <div className="item-container">
      {/* <div>{index}</div> */}
      <div>{cartList.proName}</div>
      <div>{cartList.proPrice}</div>

      {/* {cartList.proImage} */}
    </div>
  );
}
export default App;
