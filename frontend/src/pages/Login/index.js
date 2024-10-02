import './styles.scss'
import { useState } from 'react';
import {apiLogin} from '../../api/index'
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage = () => {
  const [user, setUser] = useState({username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState({username: '', password: ''});
  const [isDisableButton, setIsDisableButton] = useState(false);

  function validateForm () {
    if(!user.username) {
      setErrorMessage((prev)=> ({
        ...prev,
        username: 'Tên tài khoản không được để trống'
      }))
      return false
    }
    if(!user.password) {
      setErrorMessage((prev)=> ({
        ...prev,
        password: 'Mật khẩu không được để trống'
      }))
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
    <div className='login'>
      <div className='login-form' >
        <div className='login-form-content'>
          <div className='login-logo'>CMS</div>
          <div className='break-line'/>
          <div className='text-message'>Chào bạn<br/> Mời bạn đăng nhập vào hệ thống</div>
          <form className='form' onSubmit={handleLogin}>
            <div className='login-input'>
              <Input
                className='check-error'
                errorMessage={errorMessage?.username}
                name="username"
                type="text"
                value={user?.username}
                onChange={onchangeInput}
                placeholder="Nhập Tên tài khoản"
              />
            </div>
            <div className='login-input'>
              <Input
                errorMessage={errorMessage?.password}
                className='check-error'
                name="password"
                type="password"
                value={user?.password}
                onChange={onchangeInput}
                placeholder="Nhập mật khẩu"
              />
            </div>
            <Button disabled={isDisableButton} text='Đăng nhập' type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;