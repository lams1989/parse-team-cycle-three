import React from 'react'
import Footer from 'components/Footer';
import 'styles/admin-layout-style.css';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

const AdminLayout = ({children}) => {
    return (
        <div className="adminLayoutContainer">
            
            <Sidebar/>
            <main className="mainPage">
                <Header/> 
                {children}
                
            
                </main>
                
        </div>
    )
}

export default AdminLayout;
