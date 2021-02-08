import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div classname='header'>
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
            </div>  

        </div>
    )
}

export default Header
