
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const logo = "https://repositorio.sunat.gob.pe/assets/custom/images/addthis1200x630.png";
    
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 140 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;