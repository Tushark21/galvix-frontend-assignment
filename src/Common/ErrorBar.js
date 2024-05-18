import Snackbar from '@mui/material/Snackbar';

function ErrorBar(props) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.isError}
            message="Some Error Occur"
        />
    );
}

export default ErrorBar;
        