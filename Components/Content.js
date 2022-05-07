import ItemList from "./ItemList";

const Content = ({items, checkBox, deleteItem}) => {
    return (
        <main>
            {items.length ? (
                <ItemList items={items} checkBox={checkBox} deleteItem={deleteItem}/>
            ) : (
                <p style={{marginTop:"11rem", textAlign: "center"}}>
                    You have no items added to the checklist       
                </p>    
            )}
        </main>
    );
}

export default Content;