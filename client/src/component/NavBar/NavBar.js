import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import './NavBar.style.scss'
import { Link } from 'react-router-dom';
import Profile from '../Profile'
import Admin from '../../views/ExternalApi'


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div >
      {!isAuthenticated && (
        <button className='auth-button' onClick={() => loginWithRedirect({})}>Sign in</button>
      )}

      {isAuthenticated && <button className='auth-button' onClick={() => logout()}>Log out</button>}
    
    {isAuthenticated && (
      <span>
        {/* <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link> */}
        <Profile/>
        <Link className='auth-button1' to="/admin">Admin</Link>
      </span>

    )}
    </div>

  );
};

export default NavBar;
