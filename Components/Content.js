import ItemList from "./ItemList";

const Content = ({items, checkBox, deleteItem}) => {
    return (
        <>
            {items.length ? (
                <ItemList items={items} checkBox={checkBox} deleteItem={deleteItem}/>
            ) : (
                <p style={{marginTop:"6rem", textAlign: "center"}}>
                    You have no items added to the checklist       
                </p>    
            )}
        </>
    );
}

export default Content;