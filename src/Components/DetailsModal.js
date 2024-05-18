import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
import ErrorBar from '../Common/ErrorBar';
import { generateDate, getColor, getIndexFromSpecies } from '../Utilities/utility';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '80%',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function DetailsModal(props) {
    const [homeWorldInfo, setHomeWorldInfo]=useState(['-', '-', '-', '-']);
    const [isError, setIsError] = useState(false);

    const color = getColor(getIndexFromSpecies(props.data.species));

    const handleError=(err)=>{
        setIsError(true);

        setInterval(()=>{
            setIsError(false);
        }, 2000);
    }

    const getCharacterInfo = async (url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setHomeWorldInfo([data.name, data.terrain, data.climate, data.residents.length]);
        }
        catch(err){
            handleError(err);
        }
    }

    useEffect(()=>{
        getCharacterInfo(props.data.homeworld);
    }, []);
    
    return (
        <div>
            <ErrorBar isError={isError}></ErrorBar>
            <Modal
                open={props.show}
                onClose={props.closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style} bgcolor={color}>
                    <Typography variant="h5" component="h2" style={{fontFamily: "Turret Road, sans-serif"}}>
                    {props.data?props.data.name:""}
                    </Typography>
                        
                    <List sx={{ width: '100%', maxWidth: 360, maxHeight: 360, overflow: 'auto', bgcolor: color }}>
                        <ListItem>
                            <HeightIcon></HeightIcon>
                            <ListItemText primary=" Height: " secondary={parseInt(props.data.height)/100 + "m"} />
                        </ListItem>

                        <ListItem>
                            <MonitorWeightIcon></MonitorWeightIcon>
                            <ListItemText primary=" Mass: " secondary={props.data.mass+" kg"}/>
                        </ListItem>

                        <ListItem>
                            <CakeIcon></CakeIcon>
                            <ListItemText primary=" Birth Year: "  secondary={props.data.birth_year}/>
                        </ListItem>

                        <ListItem>
                            <MovieCreationIcon></MovieCreationIcon>
                            <ListItemText primary=" Movies: " secondary={props.data.films.length}/>
                        </ListItem>

                        <ListItem>
                            <CalendarMonthIcon></CalendarMonthIcon>
                            <ListItemText primary=" Entry Date: "  secondary={generateDate(Date.parse(props.data.created))}/>
                        </ListItem>

                        <ListItem>
                            <HomeIcon></HomeIcon>
                            <ListItemText primary=" Home World: " secondary={homeWorldInfo[0]} />
                        </ListItem>

                        <ListItem>
                            <TerrainIcon></TerrainIcon>
                            <ListItemText primary=" Terrain: " secondary={homeWorldInfo[1]} />
                        </ListItem>

                        <ListItem>
                            <CloudIcon></CloudIcon>
                            <ListItemText primary=" Climate: " secondary={homeWorldInfo[2]} />
                        </ListItem>

                        <ListItem>
                            <HolidayVillageIcon></HolidayVillageIcon>
                            <ListItemText primary=" Amount of residents: " secondary={homeWorldInfo[3]} />
                        </ListItem>
                    </List>
                </Box>
            </Modal>
        </div>
        
    );
}

export default DetailsModal;