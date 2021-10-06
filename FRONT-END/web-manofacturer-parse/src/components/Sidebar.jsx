import React from 'react'
import { NavLink } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar bg-dark">
            <ul>
                <li>
                    <NavLink to="/product-manager" exact activeClassName="active" className="text-white btn btn-secondary rounded py-2 w-100 d-inline-block"><FaIcons.FaLuggageCart className="me-2" />Product Manager</NavLink>
                </li>
                <li>
                    <NavLink to="/seller-manager" exact activeClassName="active" className="text-white btn btn-secondary rounded py-2 w-100 d-inline-block"><FaIcons.FaMugHot className="me-2" />Seller Manager</NavLink>
                </li>
                
                <li>
                    <NavLink to="/sales-manager" exact activeClassName="active" className="text-white btn btn-secondary rounded py-2 w-100 d-inline-block"><FaIcons.FaMoneyBillAlt className="me-2" />Management Information</NavLink>
                </li>
                <li>
                    <NavLink to="/" exact activeClassName="active" className="text-white btn btn-secondary rounded py-2 w-100 d-inline-block"><FaIcons.FaUserInjured className="me-2" />LogOut</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
