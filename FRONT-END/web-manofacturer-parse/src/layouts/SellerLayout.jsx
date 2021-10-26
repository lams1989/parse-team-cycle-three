import React from 'react'
import Sidebar from 'components/Sidebar';
import PrivateLayout from './PrivateLayout';

export default function SellerLayout({ children }) {
    return (
        <PrivateLayout>
        <div className="sellerLayoutContainer">
            <Sidebar />
            <main>{children}</main>
        </div>
        </PrivateLayout>
    )
}
