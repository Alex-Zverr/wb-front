import './shop.scss'
import Product from "../Product/Product.jsx";
import {FormEvent, useEffect, useState} from "react";
import {getProductData, createProduct} from "../../utils/get-data.ts";
import Modal from "../Modal/Modal.tsx";
import Button from "../Button/Button.tsx";

interface CustomElements extends HTMLFormControlsCollection   {
    name: HTMLInputElement,
    count_full: HTMLInputElement,
    count_sort: HTMLInputElement,
    count: HTMLInputElement,
}

interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
}

const Shop = () => {

    const [productData, setProductData] = useState<Item[] | null>(null)
    const [addProduct, setAddProduct] = useState(false)

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

    const handleSubmit = async (e: FormEvent<CustomForm>) => {
        e.preventDefault();
        const target = e.currentTarget.elements;

        const createItem: ItemCreate =  {
            name: target.name.value.toString(),
            count_full: +target.count_full.value,
            count_sort: +target.count_sort.value,
            count: +target.count.value
        }

        const item = await createProduct(createItem)
        if (productData) {
            setProductData([...productData, item])
        } else {
            setProductData([item])
        }

        setAddProduct(false)

        // console.log(target);
    }

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
            <button className="shop__btn-create btn" onClick={() => setAddProduct(!addProduct)}>Добавить продукт</button>
            <Modal isVisible={addProduct} onClose={() => setAddProduct(false)}>
                <h1 className="shop__modal-title">Добавить товар!</h1>
                <form className="shop__form" onSubmit={(event: FormEvent<CustomForm>) => handleSubmit(event)}>
                    <input className="shop__modal-input" type="text" name="name" placeholder="Название товара"/>
                    <input className="shop__modal-input" type="number" name="count_full" placeholder="Всего товара"/>
                    <input className="shop__modal-input" type="number" name="count_sort" placeholder="Товар на сартировке"/>
                    <input className="shop__modal-input" type="number" name="count" placeholder="Товара упаковано" defaultValue={0}/>
                    <Button>Добавить</Button>
                </form>
            </Modal>
        </section>
    )
};

export default Shop;