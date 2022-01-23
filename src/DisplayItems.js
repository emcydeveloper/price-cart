import './Style.css';

export function DisplayItems({proImage, proName, proRatings, proSummary, proPrice}) {

  return (
    <div className="display-items-container-flex">
      <div className="display-items-flex">
    {proImage}, {proName}, {proRatings}, {proSummary}, {proPrice}
      </div>
    </div>
  );
}
