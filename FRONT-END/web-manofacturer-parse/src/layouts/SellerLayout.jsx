import React from 'react'
import Sidebar from 'components/Sidebar';

export default function SellerLayout({ children }) {
    return (
        <div className="sellerLayoutContainer">
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}
