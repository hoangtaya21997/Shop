import { useState } from 'react';
import axios from 'axios';
import {apiLogin} from '../../api/index'
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [user, setUser] = useState({username: '', password: ''});
  const [erroMessage, setErroMessage] = useState({username: '', password: ''});
  const [isDisableButton, setIsDisableButton] = useState(false);

  function validateForm () {
    if(!user.username) {
      setErroMessage('Tên tài khoản không được để trống')
      return false
    }
    if(!user.password) {
      setErroMessage('Mật khẩu không được để trống')
      return false
    }
    return true
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    //chưa validate k gọi api
    if (!validateForm()) return;

    setIsDisableButton(true)

    const params = {
      username: user?.username,
      password: user?.password,
    }

    try {
      const res = await apiLogin(params);
      if(res?.data.success) {
          localStorage.setItem('token', res.data.token); // Lưu JWT vào localStorage
          localStorage.setItem('role', res.data.role);
        }
      } catch (error) {
        toast.error("Đã có lỗi xảy ra")
      }
      finally {
        setIsDisableButton(false);
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
      <button disabled={isDisableButton} type="submit">Login</button>
    </form>
  );
};

export default LoginPage;