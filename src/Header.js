import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
        <IconButton >
        <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>

        {/* Tinder logo in the middle */}
        <img
                className="header__logo" 
                src="https://cdn.iconscout.com/icon/free/png-512/tinder-7-226557.png" 
                alt=""
            />
            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            

        </div>
    )
}

export default Header
