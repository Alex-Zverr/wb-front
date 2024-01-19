import axios, {AxiosResponse} from "axios";

const API_URL = 'http://localhost:4001';

export const getProductData = async (): Promise<Item[]> => {
    try {
        const response: AxiosResponse<Item[]> = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}
export const upDateProduct = async ( item: Item, count: number): Promise<Item> => {
    try {
        item['count_sort'] = item['count_sort'] + count
        item['count_full'] = item['count_full'] + count
        const response: AxiosResponse<Item> = await axios.put(`${API_URL}/products/${item.id}`, item);

        return response.data;
    } catch (error) {
        console.log('error')
        throw error;
    }
}