import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="headerMain">
            <div className="header__Left">
                {/* image and search bar */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxPvqaxd_or2KL2SiMkHRPabhfFvIRQhHZA&usqp=CAU" alt="Linkedin logo"/>

                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar="https://image.shutterstock.com/image-photo/photo-young-pretty-cute-blonde-260nw-1702363189.jpg" title="me" /> 
            </div>

      </div>
    )
}
export default Header;
