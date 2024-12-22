import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
              
            <Outlet></Outlet>
            <div><Footer></Footer></div>
        </div>
    );
};

export default MainLayout;