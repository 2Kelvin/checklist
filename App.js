import { useState } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddItems from "./Components/AddItems";

function App() {
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

  const [newItem, setNewItem] = useState("");
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
  };
  
  return (
    <div className="App">
      <Header title="CHECKLIST" />
      <AddItems newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items} checkBox={checkBox} deleteItem={deleteItem}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
