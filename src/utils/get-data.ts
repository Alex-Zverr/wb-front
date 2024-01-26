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
export const createProduct = async ( item: ItemCreate): Promise<Item> => {
    try {
        const response: AxiosResponse<Item> = await axios.post(`${API_URL}/products`, item);

        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}
export const upDateProduct = async ( item: Item): Promise<Item> => {
    try {
        const response: AxiosResponse<Item> = await axios.patch(`${API_URL}/products/${item.id}`, item);

        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}
