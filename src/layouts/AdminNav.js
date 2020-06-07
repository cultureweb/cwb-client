import React from 'react';
import { Link } from 'react-router-dom';


function AdminNav() {
    const navStyle = {
        color:"white"
    }
    return (
        <nav>
            <Link style={navStyle} to="/admin"><h3>Logo</h3></Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/admin/create"><li>Create</li></Link>
                
                <Link style={navStyle} to="/admin/edit"><li>Edit</li></Link>
                
           </ul>
        </nav>
    );
}


export default AdminNav;
