import React from 'react';
import '../Layout/Layout.css';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="admin-layout">
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Column */}
          <div className="col-md-3 col-lg-2 p-0">
            <SideBar />
          </div>
          
          {/* Main Content Column */}
          <div className="col-md-9 col-lg-10 main-content">
            {/* Header Section */}
            <header className="">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Welcome back, Admin!</h2>
                <div className="d-flex align-items-center">
                  <div className="admin-avatar">
                    <img 
                      src="https://via.placeholder.com/40" 
                      className="rounded-circle" 
                      alt="Admin Avatar"
                    />
                  </div>
                </div>
              </div>
            </header>
            
            {/* Page Content */}
            <main className="p-4">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}