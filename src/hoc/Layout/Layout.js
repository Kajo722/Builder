import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from  '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        if (this.state.showSideDrawer === false) {
            this.setState({showSideDrawer: true})
        }
        else {
            this.setState({showSideDrawer: false})
        }
    }

    render() {
        return (    
            <>
                <Toolbar menu={this.sideDrawerClosedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}


export default Layout;