import './styles.scss'
import  { ReactComponent as IconSearch }  from '../../assets/svg/search.svg'
import  Input  from '../Input'
import  Button  from '../Button'

const Fillter = () => {

  const handleSearch = () => {

  }
  return (
    <div className="filter-top">
        <div className='filter'>
          <Input icon="search" onchange={handleSearch}/>
          <Button text='Xuất excel' className="btn-light"/>
        </div>
    </div>
  );
}

const ListItem = ({active}) => {
    return (
      <div className="list-content">
          <div className="title">Danh sách sản phẩm</div>
          <Fillter/>
      </div>
    );
  }
  
  export default ListItem;