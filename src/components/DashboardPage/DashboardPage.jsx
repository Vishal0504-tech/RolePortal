import { Link } from 'react-router-dom';
import '../DashboardPage/DashboardPage.css';
 



function DashboardPage() {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to the Dashboard</h2>
      <Link to="/create-user" className="dashboard-button">
        Create New User
      </Link>
    </div>
  );
}
export default DashboardPage;
