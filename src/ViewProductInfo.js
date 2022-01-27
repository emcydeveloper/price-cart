import { useParams } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";

export function ViewProductInfo({ productList, cartInfo, setcartInfo }) {
  // cartVal, setCartVal,
  const { index } = useParams();

  const getProduct = productList[index];

console.log(cartInfo);
  
  return (
    <div className="product-container">

      
  
      {/* <h2>value = {cartItems[0]}</h2> */}
      
      <div className="pro-img-details">
        <div className="pro-image">
          <img
            className="pro-image"
            alt="product"
            src={getProduct.proImage}
          ></img>
        </div>
        <div className="pro-info">
          <div>
            <h1>{getProduct.proName}</h1>
          </div>
          <div>{getProduct.proRatings}</div>
          <div>
            <p className="btn-price">
              <span className="a-price-symbol">₹</span>
              {getProduct.proPrice}
            </p>
          </div>
          <div>
            <button
              className="btn-cart"
              onClick={() => {
                setcartInfo([...cartInfo,index])
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>{getProduct.proName}</h2>
          <LoremIpsum /><LoremIpsum /><LoremIpsum />
        </div>
      </div>
    </div>
  );
}
