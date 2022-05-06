import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, checkBox, deleteItem}) => {
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
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
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{marginTop:"12rem"}}>
                    Your checklist is empty!        
                </p>
            )}
        </main>
    );
}

export default Content;