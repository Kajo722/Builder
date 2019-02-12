import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import {Link} from 'react-router-dom';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div onClick={props.menu} className={styles.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Logo}>
            <Link to='/'>
            <Logo />
            </Link>
            </div>
                <nav className={styles.DekstopOnly}>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
        </header>
    )
}

export default toolbar;