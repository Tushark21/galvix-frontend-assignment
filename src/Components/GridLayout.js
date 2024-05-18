import * as React from 'react';
import CharacterCard from './CharacterCard';
import { Grid } from '@mui/material';

function GridLayout(props) {
  
  return (
    <Grid container rowSpacing={4} columnSpacing={4} alignItems="center" justifyContent="center" >
      {
        props.list.map((data, i)=>{
          return(<Grid item  key={data.name + i} >
              <CharacterCard data={data} ></CharacterCard>
            </Grid>)
        })
      }
    </Grid>
  );
}

export default GridLayout;