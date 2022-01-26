import { DisplayItems } from "./DisplayItems";
import { SideItems } from "./SideItems";

export function HomePage({ productItems, cartVal, setCartVal }) {

  return (
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
            cartVal={cartVal} />
        ))}
      </div>
    </div>
  );
}
