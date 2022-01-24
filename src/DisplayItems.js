import './Style.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function DisplayItems({key, proImage, proName, proRatings, proSummary, proPrice}) {

  return (
    
      <div className="display-items-flex" key={key}>
        
    <Card className="display-items-card">
      <img class="item-image" alt={proName} src={proImage}></img>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {proName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {proSummary}
        </Typography>
      </CardContent>
      <CardActions>
        <p className="btn-price"><span className="a-price-symbol">₹</span>{proPrice}</p>
        <Button className="btn-cart" size="small">Add to cart</Button>
      </CardActions>
    </Card>
    
    </div>
  );
}
