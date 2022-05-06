import { FaTrashAlt } from "react-icons/fa";

const OneItem = ({ item, checkBox, deleteItem }) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => checkBox(item.id)}
                checked={item.checked}
            />
            <label
                onDoubleClick={() => checkBox(item.id)}
                style={(item.checked) ? { textDecoration: "line-through", color: "grey" } : null}
            >{item.item}</label>
            <FaTrashAlt
                onClick={()=>deleteItem(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    );
}

export default OneItem;