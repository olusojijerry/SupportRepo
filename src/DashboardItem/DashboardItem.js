import React from 'react';

const DashboardItem = (props) => {
    return (
        <li className="nav-item nav-dropdown-toggle">
            <a className="nav-link" href={props.vendorLink}>{props.vendorName}</a>
        </li>   
    )
} 

export default DashboardItem;