import React from 'react';
import './Header.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';

export default ({black}) => {
    return (
        <header className={black ? 'header--black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Logo Netflix" />
                </a>
                
                <ul>
                    <li><a className="header--menu" href="/"><strong>Início</strong></a></li>
                    <li><a className="header--menu" href="/">Séries</a></li>
                    <li><a className="header--menu" href="/">Filmes</a></li>
                    <li><a className="header--menu" href="/">Bombando</a></li>
                    <li><a className="header--menu" href="/">Minha Lista</a></li>
                </ul>
            </div>
            <div className="header--user">
                <div className="header--search">
                    <a href="/" ><span><SearchIcon className="header--search--icon" /></span></a>
                </div>
                <div className="header--role">
                    <a href="/" >INFANTIL</a>
                </div>
                <div className="header--notifications">
                    <a href="/" ><span><NotificationsIcon className="header--notification--icon" /></span></a>
                </div>
                <div className="header--avatar">
                    <a href="/">
                        <img src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png" alt="Usuario" />
                        <span><ArrowDropDownSharpIcon className="header--detail" style={{fontSize: 25}}/></span>
                    </a>
                </div>
            </div>
        </header>
    );
}