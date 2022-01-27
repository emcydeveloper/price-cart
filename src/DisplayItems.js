import "./Style.css";
import { useHistory } from "react-router-dom";


export function DisplayItems({
  index,
  displayList,
  cartInfo, setcartInfo
}) {

  const viewDetails = useHistory();
//  console.log(cartInfo)

displayList.index=index;

  return (
    <div className="display-items-flex" key={index}>
      {/* <Card className="display-items-card"> */}

      <img className="item-image" alt={displayList.proName} src={displayList.proImage}></img>
      <button
        className="btn-cart"
        onClick={() => {
          setcartInfo([...cartInfo,displayList])
        }}
      >
        Add to cart
      </button>
      <button className="item-view-info" onClick={()=>{
        viewDetails.push("productdetails/"+index)
      }}>View Product</button>
      <h1>{displayList.proName}</h1>
      <p className="btn-price">
        <span className="a-price-symbol">₹</span>
        {displayList.proPrice}
      </p>
      <p>{displayList.proRatings}</p>
      <div>{displayList.proSummary}</div>
      {/* </Card> */}
    </div>
  );
}

