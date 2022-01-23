// import './App.css';
import "./Style.css";
import { DisplayItems } from "./DisplayItems";
import { Menu } from "./Menu";
import { SideItems } from "./SideItems";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function App() {
  const proImage = "https://m.media-amazon.com/images/I/71362ty8qSL._AC_UL320_.jpg";
  const proName = "Rust Cleaner";
  const proRatings = "4.5";
  const proSummary = "Clenom Powerful Rust Remover Spray for Iron, Alloy, Metal, Rust Cleaning & Protection for Car, Motorcycle, Motor Bike, Kitchen & House (500 ml)";
  const proPrice = "195";

  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <MediaCard />
      <Menu />
      <div className="items-cointainer-flex">
      <SideItems />
      <DisplayItems proImage={proImage} proName={proName} proRatings={proRatings} proSummary={proSummary} proPrice={proPrice} />
      </div>
    </div>
  );
}

function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://m.media-amazon.com/images/I/71362ty8qSL._AC_UL320_.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default App;
