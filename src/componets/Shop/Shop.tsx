import './shop.scss'
import Product from "../Product/Product.jsx";
import {useEffect, useState} from "react";
import {getProductData, getProductDataById} from "../../utils/get-data.ts";

const Shop = () => {

    const [productData, setProductData] = useState<Item[] | null>(null)
    const [productDataById, setProductDataByID] = useState<Item | null>(null)
    const [poroductId, setPoroductId] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductData();
                setProductData(data);
            } catch (error) {
                console.error("Error data", error)
            }
        };

        fetchData().then();

    }, []);


    useEffect(() => {
        const fetchDataByID = async () => {
            try {
                const data = await getProductDataById(poroductId);
                setProductDataByID(data);
            } catch (error) {
                console.error("Error data", error)
            }
        };

        fetchDataByID().then();
    }, [poroductId]);





    if (!productData) {
        return <div>Loading...</div>;
    }
    if (!productDataById) {
        return <div>Твар не найден!!</div>;
    }

    return (
        <section className="shop indent">
            <h1 className="shop__title">Информация по остаткам</h1>
            <div className="shop__list">
                {productData.map((item: Item) => (
                    <Product
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

            <h2>Товар по ID</h2>
            <input type="number" placeholder="id товара" onChange={(e) => setPoroductId(+e.target.value)}/>
            <Product key={productDataById?.id} item={productDataById}/>
        </section>
    )
};

export default Shop;