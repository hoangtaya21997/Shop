import './styles.scss'
import menu from '../../common/menu'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const userRole = Cookies.get('role');
  return (
    <div className="sidebar">
      <div className="title">Quản lý shop</div>
      <ul className="menu">
        {menu?.map((value, key) => {
          if (value?.role === userRole || value?.role === 'all') {
            return (
              <li key={key} className={`menu-item ${active === value?.active ? 'active' : ''}`} onClick={() => value?.link && navigate(value?.link)}>
                {value?.icon}
                <div className='menu-item-name'>{value?.name}</div>
              </li>
            );
          }
          return null; // Trả về null nếu không thỏa mãn điều kiện
        })}
      </ul>
    </div>
  );
}

export default Sidebar;