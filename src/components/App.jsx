import React from "react";

function App() {
  const [itemList, add] = React.useState([]);
  const [newItem, saveIt] = React.useState("");

  function handleChange(event) {
    saveIt(event.target.value);
  }

  function addItem() {
    add((prevItems) => [...prevItems, newItem]);
    saveIt("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          name="item"
          type="text"
          value={newItem}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
