import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DetailsModal from './DetailsModal';
import { generatePeopleURL } from '../Utilities/utility';
import ErrorBar from '../Common/ErrorBar';
import Loading from '../Common/Loading';

function SearchField(props) {
    const [list, setList]=useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hideModal, setHideModal]=useState(false);

    const handleError=(err)=>{
        setIsError(true);
  
        setInterval(()=>{
            setIsError(false);
        }, 2000);
    }

    const getCharacterList = async (text)=>{
        try{
            let res = await fetch(generatePeopleURL(`search=${text}`));
            res = await res.json();
            return res.results;
        }
        catch(err){
            handleError();
            return [];
        }
    }

    const handleChange=async (target)=>{        
        if(target.value){
            const tempList= await getCharacterList(target.value);
            setList(tempList);
        }
        else if(target.innerText){
            setIsLoading(true);
            const tempList= await getCharacterList(target.innerText);
            setList(tempList);
            setHideModal(true);
            setIsLoading(false);
        }
    }
    
    return (
        <div className="search-field">
            <ErrorBar isError={isError}/>
            <Loading isLoading={isLoading}/>

            <Autocomplete
            freeSolo
            options={list.map((option) => option.name)}
            onInputChange={(e) => handleChange(e.target)}
            renderInput={(params) => <TextField {...params} label="Search" />}
        />

        {
          !hideModal ? "" : <DetailsModal show={hideModal} closeModal={()=>setHideModal(false)} data={list[0]}></DetailsModal>
        }
      </div>
    );
}

export default SearchField;