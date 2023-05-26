import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function AreaCard() {

  const matches = useMediaQuery('(min-width:900px)');


  return (
    <Card sx={{ maxWidth:matches? 200:200 }}
    direction={{sm:"column",xs:'column',md:'row',lg:'row'}}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height='50'
          // {matches?"50":'100'}
          image="/static/images/cards/contemplative-reptile.jpg"
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
      </CardActionArea>
    </Card>
  );
}