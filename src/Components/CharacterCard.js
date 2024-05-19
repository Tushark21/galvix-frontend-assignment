import { useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getColor, getImageUrl, getIndexFromSpecies } from '../Utilities/utility';
import DetailsModal from './DetailsModal';

function CharacterCard(props) {
  const [hideModal, setHideModal] = useState(false);

  const imageUrl=getImageUrl(props.data.url);
  const color = getColor(getIndexFromSpecies(props.data.species));
  
  return (
    <Card sx={{ width: 240 }} style={{backgroundColor: color}} className="float-class">
      <CardActionArea onClick={()=>setHideModal(true)}>
        <CardMedia
          component="img"
          height="240"
          image={imageUrl}
          alt={props.data.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" style={{fontFamily: "Turret Road, sans-seri"}}>
            {props.data.name}
          </Typography>
        </CardContent>
      </CardActionArea>

      {
        !hideModal ? "" : <DetailsModal show={hideModal} closeModal={()=>setHideModal(false)} data={props.data}></DetailsModal>
      }
    </Card>
  );
}

export default CharacterCard;