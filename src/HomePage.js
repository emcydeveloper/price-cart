import { DisplayItems } from "./DisplayItems";
// import { SideItems } from "./SideItems";

export function HomePage({ productItems, cartVal, setCartVal,setCartItems,cartItems }) {

  return (
    <div className="items-cointainer-flex">
      <div className="side-items-container-flex">
        {/* <SideItems /> */}
      </div>

      <div className="display-items-container-flex">
        {productItems.map((itms, index) => (
          <DisplayItems
          index={index}
          displayList = {itms}
            
            setCartVal={setCartVal}
            cartVal={cartVal}
            setCartItems={setCartItems}
            cartItems={cartItems} 
            />
        ))}
      </div>
    </div>
  );
}
