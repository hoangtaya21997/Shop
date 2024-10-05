import './styles.scss'
import IconLogout from '../../assets/svg/logout.svg'
import { ReactComponent as ImgLogo } from '../../assets/svg/logo.svg';
import { apiLogout } from '../../api/index'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = ({ }) => {
  const UserName = Cookies.get('username');
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await apiLogout();
      if (res?.data.success) {
        Cookies.remove('token');
        Cookies.remove('role');
        Cookies.remove('username');
        navigate('/login');
      }
    } catch (error) {
      toast.error("Đã có lỗi xảy ra")
    }
  }
  return (
    <header className="header">
      <div className='header-logo' onClick={()=> {navigate('/')}}>
        <ImgLogo />
      </div>
      <div className='user'>
        <div className='user-name'>{UserName}</div>
        <img className='user-logo' src='https://cnnd.mediacdn.vn/zoom/60_60/203375445438795776/2024/9/17/logo-mob-17265456816221133853893.png'></img>
        <ul className='user-action'>
          <li className='user-action-item' onClick={handleLogout} >
            <img src={IconLogout} alt="Logout Icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;