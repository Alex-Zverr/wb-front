import './product.scss'
import Button from "../Button/Button.tsx";
import {FC, FormEvent, useState} from "react";
import Modal from "../Modal/Modal.tsx"
import {upDateProduct} from "../../utils/get-data.ts";

interface ProductProps {
    item: Item
}

interface CustomElements extends HTMLFormControlsCollection   {
    add: HTMLInputElement;
    delete: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
}

const Product: FC<ProductProps> = ({item}) => {

    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const handleSubmit = (e: FormEvent<CustomForm>) => {
        e.preventDefault()
        const target = e.currentTarget.elements;
        const count = target.add ? +target.add.value : -target.delete.value;
        upDateProduct(item, count).then();
        setAddModal(false)
        setDeleteModal(false)
    }

    return (
        <>
            <div className="product">
                <span className="product__name">{item.name}</span>
                <div className="product__count">
                    <span className="product__label">Товара упаковано</span>
                    {item.count}
                </div>
                <div className="product__count">
                    <span className="product__label">Товар на сартировке</span>
                    {item.count_sort}
                </div>
                <div className="product__count">
                    <span className="product__label">Всего товара</span>
                    {item.count_full}
                </div>
                <div className="product__buttons">
                    <Button onClick={() => setAddModal(!addModal)}>Новый</Button>
                    <Button onClick={() => setDeleteModal(!deleteModal)} view={'btn--delete'}>Проданный</Button>
                </div>
            </div>
            <Modal isVisible={addModal} onClose={() => setAddModal(false)}>
                <h1 className="shop__modal-title">Добавить товар на склад</h1>
                <form onSubmit={handleSubmit}>
                    <input className="shop__modal-input" id="count" type="number" name="add" placeholder="Поступления"/>
                    <Button>Подтвердить</Button>
                </form>
            </Modal>
            <Modal isVisible={deleteModal} onClose={() => setDeleteModal(false)}>
                <h1 className="shop__modal-title">Удалить товар</h1>
                <form onSubmit={handleSubmit}>
                    <input className="shop__modal-input" id="count" type="number" name="delete" placeholder="Проданно"/>
                    <Button>Подтвердить</Button>
                </form>
            </Modal>
        </>
    )
};

export default Product;