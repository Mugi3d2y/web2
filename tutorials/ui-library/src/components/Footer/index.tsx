//import "./Footer.css";
import { Copyright } from "@mui/icons-material";
import logo from "../../assets/images/js-logo.png";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    /*<footer>
      <h1 className="animate__animated animate__bounce animate__delay-2s">
        But we also love JS
      </h1>
      <img src={logo} alt="" />
    </footer>
    */

    <Box component="footer" color="">
      <Container maxWidth="sm">
        <Box>
          <Typography variant="body2">But we also love JS</Typography>
          <Typography>
            <Copyright />
            myAmazingPizzeria
          </Typography>
        </Box>
        <Box>
          <img src={logo} alt="" width={50} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
