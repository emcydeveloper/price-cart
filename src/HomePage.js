import { DisplayItems } from "./DisplayItems";
// import { SideItems } from "./SideItems";

export function HomePage({ productItems, cartInfo, setcartInfo }) {
  return (
    <div className="items-cointainer-flex">
      <div className="side-items-container-flex">{/* <SideItems /> */}</div>

      <div className="display-items-container-flex">
        {productItems.map((itms, index) => (
          <DisplayItems
            index={index}
            displayList={itms}
            cartInfo={cartInfo}
            setcartInfo={setcartInfo}
          />
        ))}
      </div>
    </div>
  );
}
