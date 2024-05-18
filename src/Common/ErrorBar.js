import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function ErrorBar(props) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={props.isError}>
            <Alert
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Some Error Occur
            </Alert>
        </Snackbar>
    );
}

export default ErrorBar;
