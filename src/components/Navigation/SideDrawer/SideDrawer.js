import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasess = [styles.SideDrawer, styles.Close]
    if (props.open) {
        attachedClasess = [styles.SideDrawer, styles.Open]
    }
    return (
        <>
            <Backdrop  show={props.open} clicked={props.closed}/>
            <div className={attachedClasess.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                    <nav>
                        <NavigationItems />
                    </nav>
            </div>
        </>
    );
}

export default sideDrawer;