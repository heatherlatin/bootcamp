import React, { useReducer, useRef } from "react";
import "./App.css";
let currentId = 1;

const TodoList = () => {
  const todoTextRef = useRef();
  // Placeholder array
  const [items, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case "add":
        return [
          {
            id: currentId++,
            name: action.name
          },
          ...state
        ];
      case "delete":
        return state.filter(item => item.id !== action.id);
      default:
        return state;
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Start typing what you need to do..."
          ref={todoTextRef} />
        <button
          className="btn btn-success mt-3 mb-5"
          type="submit"
          onClick={() => dispatch({
            type: "add",
            name: todoTextRef.current.value
          })}>
          Add to List
        </button>
      </form>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({
              type: "delete",
              id: item.id
            })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
