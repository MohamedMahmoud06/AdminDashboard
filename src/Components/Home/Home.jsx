import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return<>
             {/* <!-- Welcome Card --> */}
             <div className="card welcome-card bg-white mb-4">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h3 className="card-title">Welcome to your dashboard</h3>
                            <p className="card-text">You have 12 new notifications, 5 pending orders, and 3 support tickets that need your attention.</p>
                            <Link href="#" className="btn btn-primary">View notifications</Link>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <img src="https://via.placeholder.com/300x200" className="img-fluid rounded" alt="Dashboard illustration"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Stats Cards --> */}
            <div className="row mb-4">
                <div className="col-md-3 mb-3">
                    <div className="card stat-card bg-primary text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="card-subtitle mb-2">Total Users</h6>
                                    <h3 className="card-title">1,254</h3>
                                </div>
                                <i className="bi bi-people stat-icon"></i>
                            </div>
                            <p className="card-text"><small>+12% from last month</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card stat-card bg-success text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="card-subtitle mb-2">Total Revenue</h6>
                                    <h3 className="card-title">$24,780</h3>
                                </div>
                                <i className="bi bi-currency-dollar stat-icon"></i>
                            </div>
                            <p className="card-text"><small>+8% from last month</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card stat-card bg-warning text-dark">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="card-subtitle mb-2">Pending Orders</h6>
                                    <h3 className="card-title">24</h3>
                                </div>
                                <i className="bi bi-cart stat-icon"></i>
                            </div>
                            <p className="card-text"><small>5 new today</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card stat-card bg-info text-white">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="card-subtitle mb-2">Support Tickets</h6>
                                    <h3 className="card-title">8</h3>
                                </div>
                                <i className="bi bi-headset stat-icon"></i>
                            </div>
                            <p className="card-text"><small>2 urgent</small></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Recent Activity --> */}
            <div className="row">
                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Recent Activity</h5>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Action</th>
                                            <th>User</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1234</td>
                                            <td>New order</td>
                                            <td>John Doe</td>
                                            <td>10 min ago</td>
                                            <td><span className="badge bg-warning text-dark">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>#1233</td>
                                            <td>User registration</td>
                                            <td>Jane Smith</td>
                                            <td>25 min ago</td>
                                            <td><span className="badge bg-success">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>#1232</td>
                                            <td>Payment received</td>
                                            <td>Robert Johnson</td>
                                            <td>1 hour ago</td>
                                            <td><span className="badge bg-success">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>#1231</td>
                                            <td>Support ticket</td>
                                            <td>Emily Davis</td>
                                            <td>2 hours ago</td>
                                            <td><span className="badge bg-danger">Urgent</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Quick Actions</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary text-start"><i className="bi bi-plus-circle"></i> <Link to='addProduct' className='text-decoration-none'>Add New Product </Link> </button>
                                <button className="btn btn-outline-success text-start"><i className="bi bi-person-plus"></i> Create User</button>
                                <button className="btn btn-outline-info text-start"><i className="bi bi-file-earmark-text"></i> Generate Report</button>
                                <button className="btn btn-outline-warning text-start"><i className="bi bi-gear"></i> System Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
  </>
}
