import './styles.scss'
import React, { useState, useRef } from "react";

import ClickOutside from "../ClickOutside";
const BoxProduct = React.memo(({handleOpenModalEdit, data}) => {
  const [isAction, setIsAction] = useState(false)
  const popupRef = useRef(null)

    const handleShowModal = () => {
      setIsAction(false)
      handleOpenModalEdit()
    }
    return (
        <tr className="table-item">
          {console.log(data, "-----")}
          <td className="table-pd">
            <img src="https://cnnd.mediacdn.vn/thumb_h/90/203375445438795776/2024/9/19/frame-37088-17267428876925925970.png" alt=""
            />
          </td>
          <td className="table-pd text-left">
            <p className="item-name">{data?.name}</p>
          </td>
          <td className="table-pd text-left">
            <p className="item-name">{data?.price}</p>
          </td>
          <td className="table-pd">
            <p className="item-name">{data?.description}</p>
          </td>

          <td className="table-pd">
            <ClickOutside onClick={()=>setIsAction(false)} exceptionRef={popupRef}>
              <button type="button" className="btn-more" onClick={()=>{setIsAction(!isAction)}}></button>
              {isAction && <div className='options'>
                  <button type='button' onClick={handleShowModal}>
                      <i className='icon icon-edit'></i>
                      <span className='text-neutral-333'>Sửa</span>
                  </button>
                  <button type='button'>
                      <i className='icon icon-delete'></i>
                      <span className='text-[#D84842]'>Xoá</span>
                  </button>
              </div>}
            </ClickOutside>
          </td>
        </tr>
    );
})
export default BoxProduct;