import { ReactComponent as IconListProduct } from '../assets/svg/product.svg';
import { ReactComponent as SettingProduct } from '../assets/svg/setting.svg';
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
export default menuDefault