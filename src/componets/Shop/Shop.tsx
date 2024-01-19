import './shop.scss'
import Product from "../Product/Product.jsx";
import {useEffect, useState} from "react";
import {getProductData} from "../../utils/get-data.ts";

const Shop = () => {

    const [productData, setProductData] = useState<Item[] | null>(null)

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

    if (!productData) {
        return <div>Loading...</div>;
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
        </section>
    )
};

export default Shop;