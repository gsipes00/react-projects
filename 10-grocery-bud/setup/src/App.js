import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  // state values
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  // event handler func for submit button
  const handleSubmit = (e) => {
    e.preventDefault();

    // form on submit logic
    if (!name) {
      showAlert(true, "danger", "please enter a value");
    }
    // if editing
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            // ...item returns all properties of the item, and then updates the title prop for the item
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    }
    // if adding new item
    else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  // show alerts function
  const showAlert = (show = false, type = "", msg = "") => {
    // ES6 shorthand, passing in params
    setAlert({ show, type, msg });
  };

  // clear list function
  const clearList = () => {
    showAlert(true, "danger", "list emptied");
    setList([]);
  };

  // remove item
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed from list");
    setList(list.filter((item) => item.id !== id));
  };

  // edit item
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  // return jsx
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs...'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
