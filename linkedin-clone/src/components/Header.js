import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from './firebase';

function Header() {

    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="headerMain">
            <div className="header__Left">
                {/* image and search bar */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxPvqaxd_or2KL2SiMkHRPabhfFvIRQhHZA&usqp=CAU" alt="Linkedin logo"/>

                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications'  />
                <HeaderOption avatar={true} title="me" 
                              onClick={logoutOfApp} /> 
            </div>

      </div>
    )
}
export default Header;
