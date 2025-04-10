import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Charcard = (props) => {
  return (
    <Card sx={{ maxWidth: 365, border: 2 }}>
      <CardActionArea>
        <CardMedia sx={{maxHeight:650}}
          component="img"
          image={props.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.race}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.ki}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Charcard.defaultProps = {	
  img: "https://play-lh.googleusercontent.com/hBgrbPiElG_L4InC3fH7vU-Oho8e107qkZtkI8RtwdARlcv3U3H2GYbFtTdS2ArXAKQ",
  nombre: " ",
  race: " ",
  ki: " "
};

export default Charcard;