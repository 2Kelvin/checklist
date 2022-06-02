import { useState, useEffect } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddItems from "./Components/AddItems";
import SearchItem from "./Components/SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items"; 

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const dbListItems = await response.json(); 
        console.log(dbListItems);
        setItems(dbListItems);
      } catch (error) {
        console.log(error.stack);
      }
    };

    fetchItems();
  }, [] )

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const typedNewItem = {
      id,
      checked: false,
      item
    };
    const myChecklistItems = [...items, typedNewItem];
    setItems(myChecklistItems);
  };
  
  const checkBox = (id) => {
    const myChecklistItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);      
    setItems(myChecklistItems);
  };

  const deleteItem = (id) => {
    const myChecklistItems = items.filter((item) => item.id !== id);
    setItems(myChecklistItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  
  return (
    <div className="App">
      <Header
        title="CHECKLIST"
      />
      <AddItems
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        checkBox={checkBox}
        deleteItem={deleteItem}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
