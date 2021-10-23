import React from 'react'
import 'styles/layouts-style.css';
import Sidebar from 'components/Sidebar';
import PrivateRoute from 'components/PrivateRoute';

const AdminLayout = ({ children }) => {
    return (
        <PrivateRoute>
            <div className="adminLayoutContainer">
                <Sidebar />
                <main className="mainPage">
                    {children}
                </main>
            </div>
        </PrivateRoute>
    )
}

export default AdminLayout;
