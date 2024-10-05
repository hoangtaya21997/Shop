import './styles.scss'
import React, { useState, useRef, useCallback, useContext, Suspense, useMemo} from "react";
import { ProductContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import ClickOutside from "../ClickOutside";
import {fomatPrice} from "../../common/fomat";

const BoxProduct = React.memo(({handleOpenModalEdit, data, rule}) => {
  const navigate = useNavigate();
  const { setCurrentItem } = useContext(ProductContext);
  const [isAction, setIsAction] = useState(false)
  const popupRef = useRef(null)

    const handleShowModal = useCallback((item) => {
      setCurrentItem(item)
      setIsAction(false)
      handleOpenModalEdit()
    },[])

    const formattedPrice = useMemo(() => fomatPrice(data?.price), [data?.price]);
    
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <tr className="table-item">
          <td className="table-pd" >
            <img className='pointer' src={data?.imageUrl} alt="" onClick={()=>{navigate(`/product/${data?.id}`);}}/>
          </td>
          <td className="table-pd text-left">
            <p className="item-name pointer" onClick={()=>{navigate(`/product/${data?.id}`);}}>{data?.name}</p>
          </td>
          <td className="table-pd">
            <p className="item-name">{formattedPrice}</p>
          </td>
          <td className="table-pd">
            <p className="item-name">{data?.notes}</p>
          </td>

          {rule == "edit" && <td className="table-pd">
            <ClickOutside onClick={()=>setIsAction(false)} exceptionRef={popupRef}>
              <button type="button" className="btn-more" onClick={()=>{setIsAction(!isAction)}}></button>
              {isAction && <div className='options'>
                  <button type='button' onClick={()=> handleShowModal(data)}>
                      <i className='icon icon-edit'></i>
                      <span className='text-neutral-333'>Sửa</span>
                  </button>
                  <button type='button'>
                      <i className='icon icon-delete'></i>
                      <span className='text-[#D84842]'>Xoá</span>
                  </button>
              </div>}
            </ClickOutside>
          </td>}
        </tr>
      </Suspense>
    );
})
export default BoxProduct;