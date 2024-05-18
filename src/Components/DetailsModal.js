import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ErrorBar from '../Common/ErrorBar';
import { generateDate, getColor, getIndexFromSpecies } from '../Utilities/utility';
import InfoList from './InfoList';

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
    const [listData, setListData]=useState([]);
    const [isError, setIsError] = useState(false);

    const color = getColor(getIndexFromSpecies(props.data.species));

    const handleError=(err)=>{
        setIsError(true);

        setInterval(()=>{
            setIsError(false);
        }, 2000);
    }

    const getCharacterInfo = async (preData, url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            setListData(preData.concat([data.name, data.terrain, data.climate, data.residents.length]));
        }
        catch(err){
            handleError(err);
        }
    }

    useEffect(()=>{
        let preData=[
            parseInt(props.data.height)/100 + "m",
            props.data.mass+" kg",
            props.data.birth_year,
            props.data.films.length,
            generateDate(Date.parse(props.data.created))
        ];

        getCharacterInfo(preData, props.data.homeworld);
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

                    <InfoList data={listData}></InfoList>
                </Box>
            </Modal>
        </div>
        
    );
}

export default DetailsModal;