import { CircularProgress } from '@mui/material';

function Loading(props) {
    if(!props.isLoading){
        return
    }

    return (
        <div className='loading aligin-center'>
            <CircularProgress />
        </div>
    );
}

export default Loading;