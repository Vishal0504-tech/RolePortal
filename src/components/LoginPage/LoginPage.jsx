import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage/LoginPage.css';
 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulating login logic
    if (email === 'vishal@email.com' && password === 'vishal') {
      navigate('/dashboard');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-page">
      <h2 className='header'>Login</h2>
      <input className='type'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className='type'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
