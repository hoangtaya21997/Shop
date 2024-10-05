import React, { useState, useContext } from 'react';
import Input from '../Input';
import Button from '../Button';
import { ProductContext } from '../../context';
import './styles.scss';
import { apiUpdateProduct, apiCreateProduct } from '../../api/product';
import { ReactComponent as IconClose } from '../../assets/svg/icon-close.svg';
import { toast } from 'react-toastify';

const ModalEditProduct = ({handleClose, handleUpdateItem}) => {
    const initial = {
        id: '',
        imageUrl: '',
        name: '',
        notes:'',
        price: '',
        quantity: 0,
    }
    const { currentItem, setCurrentItem } = useContext(ProductContext);
    const [product, setProduct] = useState(currentItem || initial)
    const [errorMessage, setErrorMessage] = useState({name: '', price: ''});
    const [isDisableButton, setIsDisableButton] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value 
        }));
    }

    function validateForm () {
        if(!product.name) {
          setErrorMessage((prev)=> ({
            ...prev,
            name: 'Tên sản phẩm không được để trống'
          }))
          return false
        }
        if(!product.price) {
          setErrorMessage((prev)=> ({
            ...prev,
            price: 'Giá không được để trống'
          }))
          return false
        }
        return true
    }

      

    const handleSubmit  = async () => {
        if (!validateForm()) return;

        setIsDisableButton(true)

        const params = { 
            name: product.name, 
            price: product.price, 
            quantity: product.quantity, 
            notes: product.notes, 
            imageUrl : product.imageUrl,
        };

        if(product.id) {
            updateProduct(params)
        } else {
            createProduct(params)
        }
        
    }

    const updateProduct = async(params) => {
        try {
            const response = await apiUpdateProduct(product.id, params); 
            if (response?.data.success) {
                toast.success('Sản phẩm đã được cập nhật thành công!');
                setCurrentItem(initial)
                handleUpdateItem(response?.data?.data)
            } else {
              toast.error('Đã có lỗi xảy ra khi cập nhật sản phẩm');
            }
        } catch (error) {
            toast.error('Đã có lỗi xảy ra khi cập nhật sản phẩm');
        }
        finally {
            setIsDisableButton(false);
        }
    }

    const createProduct = async(params) => {
        try {
            const response = await apiCreateProduct(params); 
            if (response?.data.success) {
                toast.success('Thêm sản phẩm thành công!');
                setCurrentItem(initial)
                handleUpdateItem(response?.data?.data)
            } else {
              toast.error('Đã có lỗi xảy ra khi thêm mới sản phẩm');
            }
        } catch (error) {
            toast.error('Đã có lỗi xảy ra khi thêm mới sản phẩm');
        }
        finally {
            setIsDisableButton(false);
        }
    }

    const handleCloseModal = () => {
        //resetState
        setCurrentItem(initial)
        handleClose()
    }


    return (
        <div className='modal-wrap'>
            <div className='modal-content-wrap'>
                <div className='modal-top'>
                    <div className='modal-label'>{product?.id ? 'Cập nhật sản phẩm' : 'Tạo sản phẩm mới'}</div>
                    <div className='modal-close' onClick={handleCloseModal}>
                        <IconClose />
                    </div>
                </div>
                <div className='modal-content'>
                    <div className='item'>
                        <label className='label'>Tên sản phẩm (*)</label>
                        <Input
                            type="text"
                            className="input-grey check-error"
                            placeholder=""
                            name='name'
                            onChange={handleChange}
                            value={product?.name}
                            errorMessage={errorMessage?.name}
                        />
                    </div>
                    <div className='item'>
                        <label className='label'>Giá (*)</label>
                        <Input
                            onChange={handleChange}
                            type="number"
                            className="input-grey check-error"
                            placeholder=""
                            name="price"
                            value={product?.price}
                            errorMessage={errorMessage?.price}
                        />
                    </div>
                    <div className='item'>
                        <label className='label'>Đường dẫn ảnh</label>
                        <Input
                            type="text"
                            className="input-grey"
                            placeholder=""
                            name="imageUrl"
                            onChange={handleChange}
                            value={product?.imageUrl}
                        />
                    </div>
                    <div className='item'>
                        <label className='label'>Mô tả</label>
                        <div>
                            <textarea onChange={handleChange} value={product?.notes} name="notes" id="w3review"  rows="4" cols="50"/>
                        </div>
                    </div>
                </div>
                <div className='modal-bottom'>
                    <div className='btn-close'>
                        <Button className='btn-light' text="Đóng" onClick={handleCloseModal} />
                    </div>
                    <div className='btn-submit'>
                        <Button isDisableButton={isDisableButton} className='btn-info' text="Xong" onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEditProduct;
