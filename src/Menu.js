import "./Style.css";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

export function Menu({cartVal}) {
 const homeLink = useHistory();

  return (
    <div className="menu-Container">
      <div className="home-icon">
        <button className="btn-contain" onClick={()=>{
          homeLink.push("/home")
          // <p> You were redirected from {location.state.from}</p>
          }}><HomeIcon fontSize="large" sx={{ fontSize: 40 }} /></button>
      
      </div>
      <div className="shop-Cart">
        <Badge badgeContent={cartVal} color="primary">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </div>
    </div>
  );
}

