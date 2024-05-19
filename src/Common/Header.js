import { Typography } from '@mui/material';
import { HEADER_TITLE } from '../Constants/constants';

function Header(props) {
  return (
    <Typography variant="h1" style={{fontFamily: "Rubik Doodle Shadow , sans-seri"}}>{HEADER_TITLE}</Typography>
  );
}

export default Header;
