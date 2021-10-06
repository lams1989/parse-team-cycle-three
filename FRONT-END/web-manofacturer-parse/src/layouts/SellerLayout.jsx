import React from 'react'
import Sidebar from 'components/Sidebar';

export default function SellerLayout({children}) {
    return (
        <div>
        <Sidebar/>
        <main>{children}</main>
      
    </div>
    )
}
