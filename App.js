import { useState, useEffect } from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddItems from "./Components/AddItems";
import SearchItem from "./Components/SearchItem";
import Loading from "./Components/Loading";
import apiRequest from "./Components/apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items"; 

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchDbError, setFetchDbError] = useState(null);
  const [loadingDbData, setLoadingDbData] = useState(true);

  useEffect(() => {

    const fetchDbItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const dbListItems = await response.json(); 
        setItems(dbListItems);
        setFetchDbError(null);
      } catch (error) {
        setFetchDbError(error.message);
      } finally {
        setLoadingDbData(false);
      }
    };

    setTimeout(() => {
      fetchDbItems();
    }, 2000);
  }, [] )

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const typedNewItem = {
      id,
      checked: false,
      item
    };
    const myChecklistItems = [...items, typedNewItem];
    setItems(myChecklistItems);

    // adding items to the JSON database API
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(typedNewItem)
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchDbError(result);
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
      <main>
        {loadingDbData &&
          <div style={{marginTop:'5rem'}}>
            <p style={{ color: 'dodgerblue', fontSize: '27px' }}>Loading data...</p>
            <div> <Loading/> </div>
          </div>}
        {/* if error=true, display the error in the UI */}
        {fetchDbError && <p style={{color:'red', marginTop:'6rem', fontSize:'26px'}}>{`Error: ${fetchDbError}`}</p>}
        {/* if error=false & data is not loading display Content */}
        {!fetchDbError && !loadingDbData && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          checkBox={checkBox}
          deleteItem={deleteItem}
        />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
