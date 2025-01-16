import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CreateUserPage/CreateUserPage.css';
 
function CreateUserPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Created:', { name, email, password, role });
    
    if (role === "student") {
      navigate("/student-login-signup");
    } else if (role === "staff") {
      navigate("/staff-login-signup");
    } else if (role === "hod") {
      navigate("/hod-login-signup");
    } else if (role === "admin") {
      navigate("/admin-login-signup");
    }
  };
  

  return (
    <div className="user-create-page">
      <h2 className='user-create-form h2'>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role :</label>
          <select  value={role} onChange={(e) => setRole(e.target.value)}>
            <option className='select' value="student">Student</option>
            <option className='select' value="staff">Staff</option>
            <option className='select' value="hod">HOD</option>
            <option className='select' value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default  CreateUserPage;
