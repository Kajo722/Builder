import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from  '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux'

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
                <Toolbar 
                menu={this.sideDrawerClosedHandler}
                isAuth={this.props.isAuthenticated}/>
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}
                isAuth={this.props.isAuthenticated}/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated : state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);