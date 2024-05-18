import { Button } from '@mui/material';

function NavigationButtons(props) {
  
  return (
    <div className="nav-button">
        <Button variant="contained" onClick={()=>{props.handlePrevClick()}}>Prev</Button>
        <Button variant="contained" onClick={()=>{props.handleNextClick()}}>Next</Button>
    </div>
  );
}

export default NavigationButtons;