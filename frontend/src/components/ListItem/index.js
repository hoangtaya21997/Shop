import "./styles.scss";
import React, { useCallback, useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import Pagination from "../Pagination";
import BoxProduct from "../BoxProduct";
import ModalEditProduct from "../ModalEditProduct";


const Filter = React.memo(() => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    TotalItem: 20,
    pageSize: 2,
  });

  const handleSearch = () => {};

  const handleChangePage = (newCurrentPage) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: newCurrentPage,
    }));
  };
  return (
    <div className="filter-top">
      <div className="filter">
        <Input
          icon="search"
          onchange={handleSearch}
          name="search"
          type="text"
          className="input-grey"
          placeholder="Tìm kiếm sản phẩm..."
        />
        <Button text="Xuất excel" className="btn-light" />
        <Button text="Tạo sản phẩm mới" className="btn-info" />
      </div>
      <Pagination
        pageSize={pagination?.pageSize}
        TotalItem={pagination?.TotalItem}
        currentPage={pagination?.currentPage}
        onPageChange={handleChangePage}
      />
    </div>
  );
});

const ListItem = () => {
  const [modalEdit, setModalEdit] = useState(false)
  const [listItems, setListItems] = useState(false)

  const handleShowModal = useCallback(() => {
    setModalEdit(true)
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalEdit(false)
  }, []);


  useEffect(() => {
    const url = "https://cnnd.mediacdn.vn/thumb_h/90/203375445438795776/2024/9/19/frame-37088-17267428876925925970.png"
    const item = [
      {id: '1', name: 'sản phẩm 1', image:url, quantity:'20', description: 'Mô tả sản phẩm', price: '200000'},
      {id: '2', name: 'sản phẩm 2', image:url, quantity:'20', description: 'Mô tả sản phẩm', price: '200000'},
      {id: '3', name: 'sản phẩm 3', image:url, quantity:'20', description: 'Mô tả sản phẩm', price: '200000'},
      {id: '4', name: 'sản phẩm 4', image:url, quantity:'20', description: 'Mô tả sản phẩm', price: '200000'},
      {id: '5', name: 'sản phẩm 5', image:url, quantity:'20', description: 'Mô tả sản phẩm', price: '200000'},
      {id: '6', name: 'sản phẩm 6', image:url, quantity:'20', description: 'Mô tả sản phẩm', price: '200000'},
    ]
    setListItems(item)
  
  }, [])
  


  return (
    <div className="list-content">
      <div className="title">Danh sách sản phẩm</div>
      <Filter />
      <div className="list-items">
      <table className="table-management">
        <thead className="sticky top-0 z-10">
          <tr>
            <th className="table-pd">Ảnh đại diện</th>
            <th className="table-pd text-left">Tên sản phẩm</th>
            <th className="table-pd text-left">Đơn giá</th>
            <th className="table-pd">Mô tả sản phẩm</th>
            <th className="table-pd">Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {listItems?.length > 0 && listItems?.map((value, key) => (
            <BoxProduct data={value} key={key} handleOpenModalEdit={handleShowModal}/>
          ))}
        </tbody>
      </table>
      </div>
      {modalEdit && <ModalEditProduct handleClose={handleCloseModal}/>}
    </div>
  );
};

export default ListItem;
