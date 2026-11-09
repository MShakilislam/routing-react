import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import "./Root.css"

const Root = () => {

    const naVigations = useNavigation()
    const isNavigationg = Boolean(naVigations.location)
    return (
        <div>
            <Header></Header>
            <div className='root-nav'>
                <SideBar></SideBar>
                {isNavigationg && <span>Loading.........</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;