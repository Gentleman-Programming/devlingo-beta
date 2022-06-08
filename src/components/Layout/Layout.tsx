import { NavbarL } from '../../styled-components';
import { Link } from 'react-router-dom'; 
import { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Layout = ({children}: any) => {
    const buttonStylesRef = useRef<any>();

    const handleClass = () => {
        if (buttonStylesRef.current) {
            buttonStylesRef.current.classList.toggle('active');
        }
    };
    return (
        <>
            <NavbarL>
                <ArrowBackIosIcon sx={{ fontSize: '4vmax' }} />
                <div className="dropdown">
                    <AccountCircleIcon onClick={handleClass}  sx={{ fontSize: '6vmax' }} />
                    <div className="dropdown-content" ref={buttonStylesRef}>
                        <Link to="/home">Perfil</Link>
                        <Link to="/home">Cerrar Sesion</Link>
                    </div>
                </div>
            </NavbarL>
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;