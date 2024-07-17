import { IProduct } from '@/common/types/product';
import instance from '@/configs/axios'

export const getAllProducts = async () => {
try {
    const reponse = await instance.get("/products")
    console.log(reponse);
    
    return reponse
} catch (error) {
    return {
        data: null,
        status: 500,
        statusText: "Err",
        headers: {},
config: {} as any
    }
}
}

export const getById = async (id: number) => {
    try {
        const reponse = await instance.get(`/product/${id}`)
        return reponse.data
        
    } catch (error) {
        console.log(error);
    }
}
export const updateProduct = async (product: IProduct) => {
    try {
        const reponse = await instance.put(`/product/${product._id}`, product)
        return reponse.data
    } catch (error) {
        console.log(error);
        
    }
}
export const removeProduct = async (id: number) => {
    try {
        const reponse = await instance.delete(`/product/${id}`)
        return reponse
    } catch (error) {
        console.log(error);
        
    }
}

export const addProduct = async (product: IProduct) => {
try {
    const reponse = await instance.post("/product/add_product",product )
    return reponse.data
} catch (error) {
    console.log(error);
}
}

