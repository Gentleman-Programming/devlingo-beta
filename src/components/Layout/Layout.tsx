import { NavbarL } from '../../styled-components';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logout } from '@/services';
import { useDispatch } from 'react-redux';
import { resetUser } from '@/redux';

const Layout = ({ children }: any) => {
  const buttonStylesRef = useRef<any>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClass = () => {
    if (buttonStylesRef.current) {
      buttonStylesRef.current.classList.toggle('active');
    }
  };

  const handleClick = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    dispatch(resetUser());
    logout();
  };

  return (
    <>
      <NavbarL>
        <ArrowBackIosIcon onClick={handleClick} sx={{ fontSize: '4vmax' }} />
        <div className="dropdown">
          <AccountCircleIcon onClick={handleClass} sx={{ fontSize: '6vmax' }} />
          <div className="dropdown-content" ref={buttonStylesRef}>
            <Link to="/">Perfil</Link>
            <Link to="/" onClick={handleLogout}>
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </NavbarL>
      <main>{children}</main>
    </>
  );
};

export default Layout;
