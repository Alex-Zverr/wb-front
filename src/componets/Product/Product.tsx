import './product.scss'
import Button from "../Button/Button.tsx";
import {FC} from "react";

interface ProductProps {
    item: Item
}

const Product: FC<ProductProps> = ({item}) => {
    return (
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
                <Button>Новый</Button>
                <Button view={'btn--delete'}>Проданный</Button>
            </div>
        </div>
    )
};

export default Product;