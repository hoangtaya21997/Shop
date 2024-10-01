import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });


  const handleLogin = async (e) => {
    e.preventDefault();
    const params = {
      username: user?.username,
      password: user?.password,
    }
    try {
      const res = await axios.post('http://localhost:8000/api/auth/login', params);
      localStorage.setItem('token', res.data.token); // Lưu JWT vào localStorage
      localStorage.setItem('role', res.data.role);
      } catch (error) {
    }
  };

  const onchangeInput = (e) => {
    const {value, name} = e?.target;
    name && setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={handleLogin}>
      <input name="username" type="text" value={user?.username} onChange={onchangeInput} placeholder="Username" />
      <input name="password" type="password" value={user?.password} onChange={onchangeInput} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;