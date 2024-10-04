import "./styles.scss";
import React, { useCallback, useState, useEffect } from "react";
import { apiGetListProducts } from '../../api/product';
import { toast } from "react-toastify";
import ModalEditProduct from"../ModalEditProduct";
const Input = React.lazy(() => import("../Input"));
const Button = React.lazy(() => import("../Button"));
const Pagination = React.lazy(() => import("../Pagination"));
const BoxProduct = React.lazy(() => import("../BoxProduct"));

const Filter = React.memo(({ pagination, handleChangePage, handleSearch, handleOpenModalEdit,rule }) => {
  const [inputSearch, setInputSearch] = useState(false);

  const handleChangeInput = (e) => {
    setInputSearch(e?.target?.value)
  }

  const handleSearchInput = (e) => {
    if (e.key === 'Enter') {
      handleSearch(inputSearch)
    }
  }

  return (
  <div className="filter-top">
    <div className="filter">
      <Input icon="search" onChange={handleChangeInput} onKeyDown={handleSearchInput} name="search" type="text" className="input-grey" placeholder="Tìm kiếm sản phẩm..." />
      <Button text="Xuất excel" className="btn-light" />
      {rule == "edit" && <Button text="Tạo sản phẩm mới" className="btn-info" onClick={handleOpenModalEdit}/>}
    </div>
      <Pagination {...pagination} onPageChange={handleChangePage} />
  </div>
)});

const ListItem = ({rule}) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [pagination, setPagination] = useState({ currentPage: 1, TotalItem: 0, pageSize: 2 });

  const toggleModal = useCallback(() => setModalEdit((prev) => !prev), []);

  const handleChangePage = useCallback((newPage) => setPagination((prev) => ({ ...prev, currentPage: newPage })), []);

  const handleSearch = useCallback(() => toast.success('Tính năng chưa hoàn thành'), []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await apiGetListProducts({ page: pagination.currentPage, limit: pagination.pageSize });
        if (data.success) {
          setListItems(data.data);
          setPagination((prev) => ({ ...prev, TotalItem: data.totalItems || 0 }));
        } else {
          toast.error('Đã có lỗi xảy ra khi lấy dữ liệu sản phẩm');
        }
      } catch {
        toast.error('Đã có lỗi xảy ra khi lấy dữ liệu sản phẩm');
      }
    };
    fetchProducts();
  }, [pagination.currentPage]);

  const handleUpdateItem = (item) => {
    if(!item.id) {
      return 
    }
    const itemExists = listItems?.some(existingItem => existingItem?.id === item?.id);
    if (itemExists) {
      setListItems((prevItems) =>
        prevItems.map((existingItem) =>
          existingItem.id === item.id ? { ...existingItem, ...item } : existingItem
        )
      );
    } else {
      setListItems((prevItems) => [item, ...prevItems]);
    }
    setModalEdit(false)
  }

  return (
    <div className="list-content">
      <div className="title">Danh sách sản phẩm</div>
      <Filter pagination={pagination} handleChangePage={handleChangePage} handleSearch={handleSearch} handleOpenModalEdit={toggleModal} rule={rule}/>
      <div className="list-items">
          <table className="table-management">
            <thead className="sticky top-0 z-10">
              <tr>
                <th className="table-pd">Ảnh đại diện</th>
                <th className="table-pd text-left">Tên sản phẩm</th>
                <th className="table-pd text-left">Đơn giá</th>
                <th className="table-pd">Mô tả sản phẩm</th>
                {rule == "edit" && <th className="table-pd">Thao Tác</th>}
              </tr>
            </thead>
            <tbody>
              {listItems.map((item, key) => (
                <BoxProduct key={key} data={item} handleOpenModalEdit={toggleModal} rule={rule}/>
              ))}
            </tbody>
          </table>
      </div>
      {modalEdit && <ModalEditProduct handleClose={toggleModal} handleUpdateItem={handleUpdateItem}/>}
    </div>
  );
};

export default ListItem;
