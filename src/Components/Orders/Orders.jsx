import React, { useState } from 'react';

export default function Orders() {
    const orderData = [
        {
          id: 1,
          userId: 1,
          productName: "iPhone 14",
          quantity: 2,
          totalPrice: 128000,
          status: "Pending",
          orderDate: "2025-04-25",
        },
        {
          id: 2,
          userId: 3,
          productName: "Samsung Galaxy Tab S9",
          quantity: 1,
          totalPrice: 75000,
          status: "Completed",
          orderDate: "2025-04-24",
        },
        {
          id: 3,
          userId: 2,
          productName: "MacBook Air M2",
          quantity: 1,
          totalPrice: 110000,
          status: "Shipped",
          orderDate: "2025-04-23",
        },
        {
          id: 4,
          userId: 5,
          productName: "Sony WH-1000XM5",
          quantity: 3,
          totalPrice: 84000,
          status: "Pending",
          orderDate: "2025-04-22",
        },
        {
          id: 5,
          userId: 6,
          productName: "Canon EOS R6",
          quantity: 1,
          totalPrice: 180000,
          status: "Completed",
          orderDate: "2025-04-21",
        },
        {
          id: 6,
          userId: 4,
          productName: "Dell XPS 15",
          quantity: 2,
          totalPrice: 290000,
          status: "Pending",
          orderDate: "2025-04-20",
        },
        {
          id: 7,
          userId: 7,
          productName: "AirPods Pro 2",
          quantity: 4,
          totalPrice: 100000,
          status: "Shipped",
          orderDate: "2025-04-19",
        },
        {
          id: 8,
          userId: 8,
          productName: "Sony A7 IV",
          quantity: 1,
          totalPrice: 220000,
          status: "Cancelled",
          orderDate: "2025-04-18",
        },
        {
          id: 9,
          userId: 9,
          productName: "LG OLED C3",
          quantity: 2,
          totalPrice: 250000,
          status: "Completed",
          orderDate: "2025-04-17",
        },
        {
          id: 10,
          userId: 10,
          productName: "Samsung QLED Q80B",
          quantity: 1,
          totalPrice: 90000,
          status: "Shipped",
          orderDate: "2025-04-16",
        },
      ];
    
  const [orders, setOrders] = useState(orderData);
  const [notification, setNotification] = useState(null);

  const updateOrderStatus = (orderId) => {
    setOrders(prevOrders =>
      prevOrders.map(order => {
        if (order.id === orderId) {
          let updatedStatus = "";
          let notificationMessage = "";
          
          if (order.status === "Shipped") {
            updatedStatus = "Completed";
            notificationMessage = `Order #${orderId} marked as Completed ✅`;
          } else if (order.status === "Completed") {
            updatedStatus = "Deleted";
            notificationMessage = `Order #${orderId} has been Deleted ❌`;
          } else if (order.status === "Pending") {
            updatedStatus = "Shipped";
            notificationMessage = `Order #${orderId} has been Shipped 🚚`;
          }

          if (notificationMessage) {
            setNotification(notificationMessage);
            setTimeout(() => setNotification(null), 3000);
          }

          return { ...order, status: updatedStatus };
        }
        return order;
      })
    );
  };

  const deleteOrderPermanently = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
    setNotification(`Order #${orderId} permanently deleted 🗑️`);
    setTimeout(() => setNotification(null), 3000);
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      Pending: "bg-warning text-dark",
      Shipped: "bg-primary",
      Completed: "bg-success",
      Cancelled: "bg-danger",
      Deleted: "bg-secondary"
    };
    return (
      <span className={`badge ${statusClasses[status] || 'bg-info'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="container-fluid p-4">
      {notification && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          {notification}
          <button 
            type="button" 
            className="btn-close" 
            onClick={() => setNotification(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h4 className="mb-0">Order Management</h4>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Total Price</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id} className={order.status === "Deleted" ? "table-secondary" : ""}>
                    <td>#{order.id}</td>
                    <td>{order.productName}</td>
                    <td>{order.quantity}</td>
                    <td>₹{order.totalPrice.toLocaleString()}</td>
                    <td>{getStatusBadge(order.status)}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className={`btn btn-sm ${
                            order.status === "Shipped" ? "btn-outline-success" :
                            order.status === "Completed" ? "btn-outline-warning" :
                            order.status === "Pending" ? "btn-outline-primary" : "btn-outline-secondary"
                          }`}
                          onClick={() => updateOrderStatus(order.id)}
                          disabled={order.status === "Deleted" || order.status === "Cancelled"}
                        >
                          {order.status === "Shipped" && "Mark Completed"}
                          {order.status === "Completed" && "Delete Order"}
                          {order.status === "Pending" && "Mark Shipped"}
                          {(order.status === "Deleted" || order.status === "Cancelled") && "N/A"}
                        </button>

                        {order.status === "Deleted" && (
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteOrderPermanently(order.id)}
                          >
                            <i className="bi bi-trash"></i> Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}