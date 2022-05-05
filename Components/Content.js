import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState(
        [
            {
                id: 1,
                checked: false,
                item:"Travel to Japan"
            },
            {
                id: 2,
                checked: false,
                item:"Learn to swim"
            },
            {
                id: 3,
                checked: false,
                item:"Take selfies every so often"
            }
        ]
    );

    const checkBox = (id) => {
        const myChecklistItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);      
        setItems(myChecklistItems);
        localStorage.setItem("bucketlist", JSON.stringify(myChecklistItems));
    };

    const deleteItem = (id) => {
        const myChecklistItems = items.filter((item) => item.id !== id);
        setItems(myChecklistItems);
        localStorage.setItem("bucketlist", JSON.stringify(myChecklistItems));
    };

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
                <p style={{marginTop:"2rem"}}>
                    Your checklist is empty!        
                </p>
            )}
        </main>
    );
}

export default Content;