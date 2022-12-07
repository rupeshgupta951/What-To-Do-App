import "./App.css";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [dtext, setDText] = useState("");
  const [dtitle, setDTitle] = useState("");

  const handleChange1 = (event) => {
    setTitle(event.target.value);
  };
  const handleChange2 = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    if (title === "" || text === "") {
      alert("To-do's Not Added");
    } else {
      localStorage.setItem(title, text);
      alert("To-do's Added");
      setDText(title);
      setDTitle(text);
    }
    setText("");
    setTitle("");
  };
  const handleClick2 = () => {
    console.log("todo deleted");

    if (localStorage.length > 0) {
      const rem = window.confirm("All TO-DO'S Deleted");
      if (rem === true) {
        localStorage.clear();
      }
    }
    setDText("");
    setDTitle("");
  };
  const handleClick3 = () => {
    if (localStorage.length > 0) {
      const todos =
        JSON.stringify(localStorage).toLocaleUpperCase(localStorage);
      setDTitle(todos);
      setDText("");
    }
  };
  // const handleClick4 = () => {

  //   };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 ">What-To-Do-App</span>
      </nav>
      <h2 className="my-3">Add To-Do</h2>
      <div className="form-group m-auto">
        <label htmlFor="todotitle">Add Title</label>
        <textarea
          className="form-control w-50 p-3 m-auto border-dark "
          id="todotext"
          rows="3"
          value={title}
          onChange={handleChange1}
        >
          {title}
        </textarea>
        <label htmlFor="todotext" className="my-2">
          Add Description
        </label>
        <textarea
          className="form-control w-50 p-3 m-auto border-dark"
          id="todotext"
          rows="3"
          value={text}
          onChange={handleChange2}

        >
          {text}
        </textarea>
      </div>
      <button
        type="button"
        className="btn btn-dark my-4 "
        id="mybtn"
        onClick={handleClick}
      >
        Add To-do
      </button>
      <button
        type="button"
        className="btn btn-danger my-4 mx-2"
        id="mybtn2"
        onClick={handleClick2}
      >
        Delete To-do's
      </button>
      <button
        type="button"
        className="btn btn-success my-4 mx-2"
        id="mybtn3"
        onClick={handleClick3}
      >
        View To-do's
      </button>
      <h3>{dtext}</h3>
      <h4>{dtitle}</h4>
    </div>
  );
}

export default App;
