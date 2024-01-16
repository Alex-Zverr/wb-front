import './shop.scss'
import Product from "../Product/Product.jsx";
import Modal from "../Modal/Modal.tsx";
import Button from "../Button/Button.tsx";
import {useRef, useState} from "react";
// import {useState} from "react";

const data: Item[] = [
    {
        id: 1,
        name: 'Товар 1',
        count_full: 100,
        count_sort: 50,
        count: 50,
    },
    {
        id: 2,
        name: 'Товар 2',
        count_full: 200,
        count_sort: 150,
        count: 50,
    },
    {
        id: 3,
        name: 'Товар 3',
        count_full: 50,
        count_sort: 20,
        count: 30,
    },
    {
        id: 4,
        name: 'Товар 4',
        count_full: 150,
        count_sort: 50,
        count: 100,
    },
]

const Store = () => {
    const [modal, setModal] = useState(false)

    return (
        <section className="shop indent">
            <h1 className="shop__title">Информация по остаткам</h1>
            <div className="shop__list">
                {data.map((item: Item) => (
                    <Product
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
            <Modal  open={modal}>
                Привет мир!!
            </Modal>

            <Button onClick={() => setModal(!modal)}>Открыть модалку</Button>
        </section>
    )
};

export default Store;