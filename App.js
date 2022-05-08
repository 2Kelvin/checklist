import { useState } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddItems from "./Components/AddItems";
import SearchItem from "./Components/SearchItem";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("checklist")));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("checklist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const typedNewItem = {
      id,
      checked: false,
      item
    };
    const myChecklistItems = [...items, typedNewItem];
    setAndSaveItems(myChecklistItems);
  };
  
  const checkBox = (id) => {
    const myChecklistItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);      
    setAndSaveItems(myChecklistItems);
  };

  const deleteItem = (id) => {
    const myChecklistItems = items.filter((item) => item.id !== id);
    setAndSaveItems(myChecklistItems);
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
