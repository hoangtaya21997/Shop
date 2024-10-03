import React, { useCallback, useMemo } from 'react';
import Input from '../Input';
import Button from '../Button';
import './styles.scss';
import { ReactComponent as IconClose } from '../../assets/svg/icon-close.svg';

const ModalEditProduct = ({handleClose}) => {
    return (
        <div className='modal-wrap'>
            <div className='modal-content-wrap'>
                <div className='modal-top'>
                    <div className='modal-label'>Tạo sản phẩm mới</div>
                    <div className='modal-close' onClick={handleClose}>
                        <IconClose />
                    </div>
                </div>
                <div className='modal-content'>
                    <div className='item'>
                        <label className='label'>Tên sản phẩm</label>
                        <Input
                            type="text"
                            className="input-grey"
                            placeholder=""
                        />
                    </div>
                    <div className='item'>
                        <label className='label'>Giá</label>
                        <Input
                            type="number"
                            className="input-grey"
                            placeholder=""
                        />
                    </div>
                    <div className='item'>
                        <label className='label'>Mô tả</label>
                        <div>
                            <textarea id="w3review" name="w3review" rows="4" cols="50"/>
                        </div>
                    </div>
                </div>
                <div className='modal-bottom'>
                    <div className='btn-close'>
                        <Button className='btn-light' text="Đóng" onClick={handleClose} />
                    </div>
                    <div className='btn-submit'>
                        <Button className='btn-info' text="Xong" onClick={handleClose}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditProduct;
