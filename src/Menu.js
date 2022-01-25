import "./Style.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailIcon from "@mui/icons-material/Mail";
import { useHistory } from "react-router-dom";

export function Menu({cartVal}) {
  const cartitems = useHistory();
  let index = 1;

  return (
    <div className="menu-Container">
      <div className="test">
        <Badge badgeContent={cartVal} color="primary">
          <MailIcon color="action" />
        </Badge>
      </div>
      <div className="shop-Cart">
        <button onClick={() => {
          cartitems.push("/cartitems/"+index)
        }}>click me</button>
        <Badge badgeContent={cartVal} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </div>
    </div>
  );
}

