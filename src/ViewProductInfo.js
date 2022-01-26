import { useParams } from "react-router-dom";

export function ViewProductInfo(getProductList) {
  const { index } = useParams();
  const { productList } = getProductList;
  const getProduct = productList[index];
  return (
    <div className="product-container">
      Viewing Product Info - {index} + {getProduct.proName}
      <div className="pro-img-details">
        <div className="pro-image">
          <img
            className="pro-image"
            alt="product"
            src={getProduct.proImage}
          ></img>
        </div>
        <div className="pro-info">
          <div>{getProduct.proName}</div>
          <div>{getProduct.proRatings}</div>
          <div>{getProduct.proSummary}</div>
          <div>{getProduct.proPrice}</div>
          <div>add to card</div>
        </div>
      </div>
    </div>
  );
}
