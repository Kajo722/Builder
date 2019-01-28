import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div onClick={props.menu} className={styles.DrawerToggle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.Logo}>
                <Logo />
            </div>
                <nav className={styles.DekstopOnly}>
                    <NavigationItems />
                </nav>
        </header>
    )
}

export default toolbar;