
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "@/configs/axios";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    return (  
  <div>
    <h1 className="text-center text-[30px]">QUẢN LÝ PRODUCTS</h1>
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-[20px]" onClick={() => NaviAdd()}>
      Thêm sản phẩm
    </button>
     <div className="overflow-x-auto">
    <table className="min-w-full bg-white border-collapse shadow-lg rounded-lg">
        <thead className="bg-gray-800 text-white">
            <tr>
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Tên sản phẩm</th>
                <th className="py-2 px-4">Giá</th>
                  <th className="py-2 px-4">Mô tả</th>
                <th className="py-2 px-4">Danh mục</th>
                <th className="py-2 px-4">Hành động</th>
            </tr>
        </thead>
        <tbody className="text-gray-700 ">
              <tr className="justify-center text-center" >
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                <td className="py-2 px-4"></td>
                     <td className="py-2 px-4"></td>
                <td className="py-2 px-4 flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Chỉnh sửa
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" >
                        Xoá
                    </button>
                </td>
            </tr>

        </tbody>
    </table>
</div>
  </div>

    );
};

export default ProductList;
