import React from 'react'
import 'styles/layouts-style.css';
import Sidebar from 'components/Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <div className="adminLayoutContainer">
            <Sidebar />
            <main className="mainPage">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout;
