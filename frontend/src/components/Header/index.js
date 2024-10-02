import './styles.scss'
import IconLogout from '../../assets/svg/logout.svg'

const Header = ({}) => {
    return (
      <heder className="header">
        <div className='header-logo'></div>
        <div className='user'>
          <div className='user-name'>Admin</div>
          <img className='user-logo' src='https://cnnd.mediacdn.vn/zoom/60_60/203375445438795776/2024/9/17/logo-mob-17265456816221133853893.png'></img>
          <ul className='user-action'>
            <li className='user-action-item'>
                <img src={IconLogout} alt="Logout Icon"/>
                <span>Đăng xuất</span>
            </li>
          </ul>
        </div>
      </heder>
    );
  }
  
  export default Header;