import { ReactComponent as IconListProduct } from '../assets/svg/product.svg';
import { ReactComponent as SettingProduct } from '../assets/svg/setting.svg';
import Cookies from 'js-cookie';
const userRole = Cookies.get('role');
const menuDefault = [
    {
      name: 'Danh sách sản phẩm',
      active: 'list-pr',
      link: '/',
      icon: <IconListProduct/>,
      role: 'all',
    },
    {
      name: 'Quản lý sản phẩm',
      link: '/products-edit',
      active: 'edit-pr',
      icon: <SettingProduct/>,
      role: 'admin',
    },
]

const menu = menuDefault?.filter(value => value?.role == userRole || value?.role === 'all');

export default menuDefault