import "./Style.css";
import Button from "@mui/material/Button";


export function DisplayItems({
  index,
  proImage,
  proName,
  proRatings,
  proSummary,
  proPrice,
  setCartVal,
  cartVal,
}) {



  return (
    <div className="display-items-flex" key={index}>
      {/* <Card className="display-items-card"> */}

      <img className="item-image" alt={proName} src={proImage}></img>
      <Button
        className="btn-cart"
        onClick={() => {
          setCartVal(cartVal + 1);
        }}
      >
        Add to cart
      </Button>
      <Button className="item-view-info">View Product</Button>
      <h1>{proName}</h1>
      <p className="btn-price">
        <span className="a-price-symbol">₹</span>
        {proPrice}
      </p>
      <p>{proRatings}</p>
      <div>{proSummary}</div>
      {/* </Card> */}
    </div>
  );
}
