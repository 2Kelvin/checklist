import OneItem from "./OneItem";

const ItemList = ({ items, checkBox, deleteItem }) => {
    return (
        <ul>
            {items.map((item) => <OneItem key={item.id} item={item} checkBox={checkBox} deleteItem={deleteItem} />)}
        </ul>
    );
}

export default ItemList;