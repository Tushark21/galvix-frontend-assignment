import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { ERROR_MSG } from '../Constants/constants';

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
                {ERROR_MSG}
            </Alert>
        </Snackbar>
    );
}

export default ErrorBar;
