import { React, useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header'
import { useParams } from 'react-router-dom';
import { apiGetProductById } from '../../api/product';
import { toast } from "react-toastify";
import {formatDate, fomatPrice} from "../../common/fomat";

function DetailPage() {
  const [product, setProduct] = useState({})
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await apiGetProductById(id);
        if (data.success) {
          setProduct(data?.data)
        } else {
          toast.error('Đã có lỗi xảy ra khi lấy dữ liệu sản phẩm');
        }
      } catch {
        toast.error('Đã có lỗi xảy ra khi lấy dữ liệu sản phẩm');
      }
    };
    fetchProduct();
    
  }, [])
  
  return (
    <div className="height-container">
      <Header/>
      <div className="content">
        <Sidebar />
        <div className="list-content">
          <div className="title">Chi Tiết sản phẩm: {product?.name || ''}</div>
          <div className="list-items">
            <table className="table-management">
              <thead className="sticky top-0 z-10">
                <tr>
                  <th className="table-pd">Ảnh đại diện</th>
                  <th className="table-pd text-left">Tên sản phẩm</th>
                  <th className="table-pd ">Đơn giá</th>
                  <th className="table-pd">Số lượng</th>
                  <th className="table-pd">Ngày tạo</th>
                  <th className="table-pd">Mô tả sản phẩm</th>
                </tr>
              </thead>
              <tbody>
              <tr className="table-item">
                  <td className="table-pd" >
                    <img src={product?.imageUrl} alt=""/>
                  </td>
                  <td className="table-pd text-left">
                    <p className="item-name" >{product?.name}</p>
                  </td>
                  <td className="table-pd ">
                    <p className="item-name">{fomatPrice(product?.price)}</p>
                  </td>
                  <td className="table-pd">
                    <p className="item-name">{product?.quantity}</p>
                  </td>
                  <td className="table-pd">
                    <p className="item-name">{formatDate(product?.createdAt)}</p>
                  </td>
                  <td className="table-pd">
                    <p className="item-name">{product?.notes}</p>
                  </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;