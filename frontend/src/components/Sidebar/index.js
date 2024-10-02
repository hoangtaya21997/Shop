import './styles.scss'
import  menu  from '../../common/menu'
const Sidebar = ({active}) => {
    return (
      <div className="sidebar">
          <div className="title">Quản lý shop</div>
          <ul className="menu">
            {menu?.map((value, key) => (
              <li key={key} className={`menu-item ${active == value?.active ? 'active' : ''}`}>
                {value?.icon}
                <div className='menu-item-name'>{value?.name}</div>
              </li>
            ))}
          </ul>
      </div>
    );
  }
  
  export default Sidebar;