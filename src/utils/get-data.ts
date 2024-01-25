import axios, {AxiosResponse} from "axios";

const API_URL = 'http://127.0.0.1:8000';

export const getProductData = async (): Promise<Item[]> => {
    try {
        const response: AxiosResponse<Item[]> = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}
export const getProductDataById = async (item_id: number): Promise<Item> => {
    try {
        const response: AxiosResponse<Item> = await axios.get(`${API_URL}/products/${item_id}`);
        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}
export const upDateProduct = async ( item: Item): Promise<Item> => {
    try {
        const response: AxiosResponse<Item> = await axios.put(`${API_URL}/products/${item.id}`, item);

        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}