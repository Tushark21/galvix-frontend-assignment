import { List, ListItem, ListItemText } from '@mui/material';
import HeightIcon from '@mui/icons-material/Height';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import HomeIcon from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';
import CloudIcon from '@mui/icons-material/Cloud';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import CakeIcon from '@mui/icons-material/Cake';

function InfoList(props) {

    return (<List sx={{ width: '100%', maxWidth: 360, maxHeight: 360, overflow: 'auto'}}>
        <ListItem>
            <HeightIcon></HeightIcon>
            <ListItemText primary=" Height: " secondary={props.data[0]} />
        </ListItem>

        <ListItem>
            <MonitorWeightIcon></MonitorWeightIcon>
            <ListItemText primary=" Mass: " secondary={props.data[1]} />
        </ListItem>

        <ListItem>
            <CakeIcon></CakeIcon>
            <ListItemText primary=" Birth Year: " secondary={props.data[2]} />
        </ListItem>

        <ListItem>
            <MovieCreationIcon></MovieCreationIcon>
            <ListItemText primary=" Movies: " secondary={props.data[3]} />
        </ListItem>

        <ListItem>
            <CalendarMonthIcon></CalendarMonthIcon>
            <ListItemText primary=" Entry Date: " secondary={props.data[4]} />
        </ListItem>

        <ListItem>
            <HomeIcon></HomeIcon>
            <ListItemText primary=" Home World: " secondary={props.data[5]} />
        </ListItem>

        <ListItem>
            <TerrainIcon></TerrainIcon>
            <ListItemText primary=" Terrain: " secondary={props.data[6]} />
        </ListItem>

        <ListItem>
            <CloudIcon></CloudIcon>
            <ListItemText primary=" Climate: " secondary={props.data[7]} />
        </ListItem>

        <ListItem>
            <HolidayVillageIcon></HolidayVillageIcon>
            <ListItemText primary=" Amount of residents: " secondary={props.data[8]} />
        </ListItem>
    </List>);
}

export default InfoList;