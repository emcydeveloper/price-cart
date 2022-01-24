import "./Style.css";

export function SideItems() {
  return (
    <div className="side-list">
      <SideList />
    </div>
  )
}

function SideList(){
  
  return (
    <ul className="sideitem-list">
      <li><button className="btn-sideitem-list">Add Items</button></li>
      <li><button className="btn-sideitem-list">Edit Items</button></li>
      <li><button className="btn-sideitem-list">Delete Items</button></li>
    </ul>
  )
}
