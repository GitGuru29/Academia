import { useState, useEffect } from 'react';
import { ChevronDown, Eye, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import '../styles/admin-dashboard.css';

interface Order {
  id: string;
  orderId: string;
  serviceType: string;
  title: string;
  contactName: string;
  email: string;
  status: 'pending' | 'quoted' | 'in_progress' | 'delivered';
  submittedAt: string;
  deadline: string;
  university: string;
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderId: 'ORD-1234567890',
    serviceType: 'FYP Development',
    title: 'Smart Agriculture Monitoring System',
    contactName: 'Aisha Perera',
    email: 'aisha@example.com',
    status: 'in_progress',
    submittedAt: '2025-05-14',
    deadline: '2025-06-30',
    university: 'SLIIT',
  },
  {
    id: '2',
    orderId: 'ORD-1234567891',
    serviceType: 'Data Analysis',
    title: 'Statistical Analysis Report',
    contactName: 'Ravi Kumar',
    email: 'ravi@example.com',
    status: 'quoted',
    submittedAt: '2025-05-15',
    deadline: '2025-05-25',
    university: 'UCSC',
  },
  {
    id: '3',
    orderId: 'ORD-1234567892',
    serviceType: 'Coding Assignments',
    title: 'Database Management System',
    contactName: 'Nadira Hassan',
    email: 'nadira@example.com',
    status: 'pending',
    submittedAt: '2025-05-16',
    deadline: '2025-05-20',
    university: 'University of Colombo',
  },
  {
    id: '4',
    orderId: 'ORD-1234567893',
    serviceType: 'UI/UX & Presentations',
    title: 'Mobile App Prototype',
    contactName: 'Kamal Silva',
    email: 'kamal@example.com',
    status: 'delivered',
    submittedAt: '2025-05-10',
    deadline: '2025-05-18',
    university: 'SLIIT',
  },
];

const statusConfig = {
  pending: { label: 'Pending', icon: Clock, color: 'warning' },
  quoted: { label: 'Quoted', icon: AlertCircle, color: 'info' },
  in_progress: { label: 'In Progress', icon: AlertCircle, color: 'warning' },
  delivered: { label: 'Delivered', icon: CheckCircle, color: 'success' },
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredOrders = selectedStatus === 'all'
    ? orders
    : orders.filter(order => order.status === selectedStatus);

  const handleStatusUpdate = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order =>
      order.orderId === orderId
        ? { ...order, status: newStatus as Order['status'] }
        : order
    ));
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsDetailOpen(true);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        {/* Header */}
        <div className="admin-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage and track all submitted orders</p>
          </div>
          <div className="admin-stats">
            <div className="stat-card">
              <div className="stat-number">{orders.length}</div>
              <div className="stat-label">Total Orders</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {orders.filter(o => o.status === 'pending').length}
              </div>
              <div className="stat-label">Pending</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {orders.filter(o => o.status === 'delivered').length}
              </div>
              <div className="stat-label">Delivered</div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="admin-filters">
          <div className="filter-group">
            <label>Filter by Status:</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Orders</option>
              <option value="pending">Pending</option>
              <option value="quoted">Quoted</option>
              <option value="in_progress">In Progress</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>

        {/* Orders Table */}
        <div className="orders-table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Service Type</th>
                <th>Title</th>
                <th>Client</th>
                <th>Status</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => {
                const statusInfo = statusConfig[order.status];
                const StatusIcon = statusInfo.icon;

                return (
                  <tr key={order.id}>
                    <td className="order-id">
                      <span className="mono">{order.orderId}</span>
                    </td>
                    <td>{order.serviceType}</td>
                    <td className="title-cell">{order.title}</td>
                    <td className="client-cell">
                      <div className="client-info">
                        <div className="client-name">{order.contactName}</div>
                        <div className="client-email">{order.email}</div>
                      </div>
                    </td>
                    <td>
                      <div className={`status-badge ${statusInfo.color}`}>
                        <StatusIcon size={16} />
                        <span>{statusInfo.label}</span>
                      </div>
                    </td>
                    <td className="deadline-cell">{order.deadline}</td>
                    <td className="actions-cell">
                      <button
                        className="action-btn"
                        onClick={() => handleViewDetails(order)}
                        title="View details"
                      >
                        <Eye size={18} />
                      </button>
                      <div className="status-dropdown">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleStatusUpdate(order.orderId, e.target.value)
                          }
                          className="status-select"
                        >
                          <option value="pending">Pending</option>
                          <option value="quoted">Quoted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="delivered">Delivered</option>
                        </select>
                        <ChevronDown size={16} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Detail Modal */}
        {isDetailOpen && selectedOrder && (
          <>
            <div
              className="detail-overlay"
              onClick={() => setIsDetailOpen(false)}
            ></div>
            <div className="detail-modal">
              <div className="detail-header">
                <h2>Order Details</h2>
                <button
                  className="detail-close"
                  onClick={() => setIsDetailOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="detail-content">
                <div className="detail-section">
                  <h3>Order Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Order ID</span>
                      <span className="detail-value mono">{selectedOrder.orderId}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Service Type</span>
                      <span className="detail-value">{selectedOrder.serviceType}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Title</span>
                      <span className="detail-value">{selectedOrder.title}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">University</span>
                      <span className="detail-value">{selectedOrder.university}</span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Client Information</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Name</span>
                      <span className="detail-value">{selectedOrder.contactName}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Email</span>
                      <span className="detail-value">{selectedOrder.email}</span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Timeline</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <span className="detail-label">Submitted</span>
                      <span className="detail-value">{selectedOrder.submittedAt}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Deadline</span>
                      <span className="detail-value">{selectedOrder.deadline}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Current Status</span>
                      <span className="detail-value">
                        {statusConfig[selectedOrder.status].label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
