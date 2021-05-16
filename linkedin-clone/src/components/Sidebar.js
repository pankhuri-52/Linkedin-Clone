
import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import '../css/Sidebar.css';
import { selectUser } from '../features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
           <span className="sidebar__hash">#</span>
           <p>{topic}</p>
        </div>
    );

    return (
        <div className='Sidebar'>
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJmEXI49sd-BoXvJF5OeOopycZn_k4O-gaA&usqp=CAU" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">114</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">599</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('technology')}
                {recentItem('careers')}
                {recentItem('personaldevelopment')}
                {recentItem('bigdata')}
                {recentItem('engineering')}
            </div>
        </div>
    )
}
export default Sidebar;