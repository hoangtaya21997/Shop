import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BoxProduct from './index'; // Đảm bảo đường dẫn chính xác
import { ProductContext } from '../../context'; // Đảm bảo đường dẫn chính xác

const mockHandleOpenModalEdit = jest.fn();
const mockHandleRemoveProduct = jest.fn();
const mockSetCurrentItem = jest.fn();

const productData = {
  id: '1',
  name: 'Test Product',
  price: 1000,
  imageUrl: 'http://example.com/image.jpg',
  notes: 'Sample notes',
};

const renderComponent = (rule) => {
  return render(
    <MemoryRouter>
      <ProductContext.Provider value={{ setCurrentItem: mockSetCurrentItem }}>
        <table className="product-table">
          
          <tbody>
          <BoxProduct
              data={productData}
              rule={rule}
              handleOpenModalEdit={mockHandleOpenModalEdit}
              handleRemoveProduct={mockHandleRemoveProduct}
            />
          </tbody>
        </table>
      </ProductContext.Provider>
    </MemoryRouter>
  );
};

describe('BoxProduct Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('calls handleRemoveProduct when delete button is clicked', () => {
    renderComponent('edit'); // Chỉ định rule là "edit" để hiển thị nút xóa

    // Mở menu hành động
    const moreOptionsButton = screen.getByRole('button', { text: /more options/i });
    fireEvent.click(moreOptionsButton);

    // Nhấp vào nút xóa
    const deleteButton = screen.getByText('Xoá');
    fireEvent.click(deleteButton);

    // Kiểm tra xem hàm handleRemoveProduct có được gọi hay không
    expect(mockHandleRemoveProduct).toHaveBeenCalledWith(productData);
  });
});
