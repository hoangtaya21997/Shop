import { ReactComponent as IconListProduct } from '../assets/svg/product.svg';
import { ReactComponent as SettingProduct } from '../assets/svg/setting.svg';

const menu = [
    {
      name: 'Danh sách sản phẩm',
      active: 'list-pr',
      link: '',
      icon: <IconListProduct/>
    },
    {
      name: 'Quản lý sản phẩm',
      link: '',
      active: 'edit-pr',
      icon: <SettingProduct/>
    },
]

export default menu