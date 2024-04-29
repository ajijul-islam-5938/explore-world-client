import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="w-[95%] mx-auto my-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;