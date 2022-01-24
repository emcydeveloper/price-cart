import "./Style.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export function DisplayItems({
  key,
  proImage,
  proName,
  proRatings,
  proSummary,
  proPrice,
}) {
  return (
    <div className="display-items-flex" key={key}>
      <Card className="display-items-card">
        <img class="item-image" alt={proName} src={proImage}></img>

        <h1>{proName}</h1>

        <div>{proSummary}</div>

        <p className="btn-price">
          <span className="a-price-symbol">₹</span>
          {proPrice}
        </p>

        <Button className="btn-cart" size="small">
          Add to cart
        </Button>
      </Card>
    </div>
  );
}
