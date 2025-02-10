import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CharCard = ({ img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s", nombre = "_____", raza = "____", ki= "___", maxKi= "___" }) => {
  return (
    <Card style={{ backgroundColor: 'black'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="green iguana"
          height="350"
          style={{ 
            width: '100%',
            objectFit: 'contain', 
            backgroundColor: 'transparent' 
          }}
        />
        <CardContent style={{color:"white"}}> 
          <Typography gutterBottom variant="h5" component="div">
           {nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            Raza= {raza}
          </Typography>
          <Typography variant="body3" sx={{ color: 'white' }}>
            Poder= {ki}
          </Typography>
          <Typography variant="body2" sx={{ color: 'white' }}>
            Máximo Poder= {maxKi}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CharCard;
