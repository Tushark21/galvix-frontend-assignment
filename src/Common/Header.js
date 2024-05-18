import { Typography } from '@mui/material';

function Header(props) {
  return (
    <Typography variant="h1" style={{fontFamily: "Rubik Doodle Shadow , sans-seri"}}>{props.title}</Typography>
  );
}

export default Header;
