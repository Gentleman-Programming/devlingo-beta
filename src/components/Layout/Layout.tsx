import { NavbarL } from '../../styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Layout = ({children}: any) => {
    return (
        <>
            <NavbarL>
                <ArrowBackIosIcon sx={{ fontSize: '5vmin' }} />
                <AccountCircleIcon sx={{ fontSize: '7vmin' }} />
            </NavbarL>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;