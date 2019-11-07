import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {FaHome, FaLocationArrow, FaRupeeSign} from 'react-icons/fa';
import {IoMdCalendar} from 'react-icons/io';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Modal from "../components/modal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});
const CardIWillUse = (props:any) => {
  const classes = useStyles();
  const [text, settext] = useState([{
    name:"Read More",
  },
{
  name2:"Download Brouchere"
}]);
    
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.card1}
          height="140"
          image={props.card}
          title={props.card2}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h5">
            {props.card2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <FaHome/> {props.card2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <IoMdCalendar/> {props.card4}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
             <FaLocationArrow/> {props.card6}
          </Typography>


          <Typography variant="body2" color="textSecondary" component="p">
              <FaRupeeSign/> {props.card3}
          </Typography>



        </CardContent>
      </CardActionArea>
      <CardActions>
       
        <Modal {...props}>Read More</Modal>
        <Modal {...props}>Brouche</Modal>
      </CardActions>
    </Card>
  );
}


export default CardIWillUse;