import GridLayout from '../Components/GridLayout';
import { useEffect, useState } from 'react';
import NavigationButtons from '../Components/NavigationButtons';
import Loading from '../Common/Loading';
import SearchField from '../Components/SearchField';
import ErrorBar from '../Common/ErrorBar';
import { generatePeopleURL } from '../Utilities/utility';

function ContentPage(props) {
    const [characterList, setCharacterList]=useState([]);
    const [currPage, setCurrPage]=useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    const handleError=(err)=>{
        setIsError(true);
  
        setInterval(()=>{
            setIsError(false);
        }, 2000);
    }
    
    const getCharacterList = async (idx)=>{
      try{
        const res = await fetch(generatePeopleURL(`page=${idx}`));

        if(res.status===200){
          return await res.json();
        }
        else{
          handleError();
        }
      }
      catch(err){
        handleError(err);
      }
    }
  
    const renderList = async (idx)=>{
      setIsLoading(true);
      const list = await getCharacterList(idx);

      if(list){
        setCharacterList(list.results);
      }
  
      setIsLoading(false);
    }
  
    const handleNextClick=()=>{
      setCurrPage(currPage+1);
    }
  
    const handlePrevClick= ()=>{
      setCurrPage(currPage-1);
    }
  
    useEffect(()=>{
      renderList(currPage);
    }, [currPage]);

    return (
        <div className='main-container'>
            <SearchField ></SearchField>

            <Loading isLoading={isLoading}></Loading>
            <ErrorBar isError={isError}></ErrorBar>

            <GridLayout list={characterList}></GridLayout>
            <NavigationButtons handlePrevClick={handlePrevClick} handleNextClick={handleNextClick}></NavigationButtons>
        </div>
    );
}

export default ContentPage;