import React from 'react';
import 'styles/layouts-style.css';
import Sidebar from 'components/Sidebar';
import PrivateLayout from 'layouts/PrivateLayout';

const AdminLayout = ({ children }) => {

    return (
        <PrivateLayout>
            <div className="adminLayoutContainer">
                <Sidebar />
                <main className="mainPage">
                    {children}
                </main>
            </div>
        </PrivateLayout>
    )
};
export default AdminLayout;
