import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return <> 
   <div className="sidebar d-flex flex-column">
            <div className="sidebar-brand">
                <h4><i className="bi bi-shield-lock"></i> Admin Panel</h4>
            </div>
            <div className="sidebar-nav flex-grow-1">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to=''><i className="bi bi-speedometer2"></i> Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='users'><i className="bi bi-people"></i> Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='products'><i className="bi bi-box-seam"></i> Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='orders'><i className="bi bi-receipt"></i> Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''><i className="bi bi-graph-up"></i> Analytics</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to=''><i className="bi bi-gear"></i> Settings</Link>
                    </li>
                </ul>
            </div>
            <div className="p-3">
                <Link to='' className="btn btn-outline-light w-100"><i className="bi bi-box-arrow-right"></i> Logout</Link>
            </div>
        </div>

  
  </> 


}

export default SideBar
