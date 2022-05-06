import ItemList from "./ItemList";

const Content = ({items, checkBox, deleteItem}) => {
    return (
        <main>
            {items.length ? (
                <ItemList items={items} checkBox={checkBox} deleteItem={deleteItem}/>
            ) : (
                <p style={{marginTop:"12rem"}}>
                    Nothing to do babyy!        
                </p>
            )}
        </main>
    );
}

export default Content;