import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { LoremIpsum } from "react-lorem-ipsum";

export function ViewProductInfo({ productList, cartVal, setCartVal }) {
  const { index } = useParams();

  const getProduct = productList[index];
  return (
    <div className="product-container">
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
            <Button
              className="btn-cart"
              onClick={() => {
                setCartVal(cartVal + 1);
              }}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p><h2>{getProduct.proName}</h2> <LoremIpsum /><LoremIpsum /><LoremIpsum /></p>
        </div>
      </div>
    </div>
  );
}
