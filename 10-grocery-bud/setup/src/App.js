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
    console.log(name);
    if (!name) {
      // display alert
      showAlert(true, "danger", "please enter a value");
    } else if (name && isEditing) {
      // deal with edit
    } else {
      //  show alert
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
  // return jsx
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
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
          <List items={list} />
          <button className='clear-btn'>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
