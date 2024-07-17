import ProductPage from "@/pages/(dashboard)/products/page";
import AddProduct from "@/pages/(dashboard)/products/Add/page";
import { Route, Routes } from "react-router-dom";
import EditProduct from "@/pages/(dashboard)/products/Edit/page";

const Router = () => {

    return (
        <>
         <Routes>
            <Route path="/shops" element={<ProductPage/>}/>
             <Route path="/add" element={<AddProduct />}/>
             <Route path="/edit/:id" element={<EditProduct />}/>
         </Routes>
        </>
    );
};

export default Router;
