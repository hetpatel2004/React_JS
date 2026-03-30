// import React, { useState } from "react";

// function Task() {
//   const [];
//   const [name, setname] = useState("");
//   const [list, setlist] = useState([]);
//   function add() {
//     const data = {
//       id: Date.now(),
//       text: name,
//     };
//     setlist([...list, data]);
//   }
//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="list your task"
//       />
//       <button onClick={add}>add</button>
//       <ul>
//         {list.map((data)=>(
//                 <li key={data.id}>
//                     {data.text}
//                 </li>
//             ))}
//       </ul>
//       <button></button>
//       <button></button>
//       <button></button>
//     </>
//   );
// }

// export default Task;




import React, { useReducer, useState, useTransition } from "react";

const initialState = {
  todos: [],
  filter: "ALL",
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }],
      };

    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case "SHOW_ALL":
      return { ...state, filter: "ALL" };

    case "SHOW_COMPLETED":
      return { ...state, filter: "COMPLETED" };

    case "SHOW_PENDING":
      return { ...state, filter: "PENDING" };

    default:
      return state;
  }
}

export default function Task() {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPending, startTransition] = useTransition();

  const handleAdd = () => {
    if (!input.trim()) return;

    startTransition(() => {
      dispatch({ type: "ADD", payload: input });
    });

    setInput("");
  };

  const filteredTodos = state.todos.filter((t) => {
    if (state.filter === "COMPLETED") return t.completed;
    if (state.filter === "PENDING") return !t.completed;
    return true;
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={handleAdd}>Add Task</button>

      <br /><br />

      <button onClick={() => dispatch({ type: "SHOW_ALL" })}>Show All</button>
      <button onClick={() => dispatch({ type: "SHOW_COMPLETED" })}>Completed</button>
      <button onClick={() => dispatch({ type: "SHOW_PENDING" })}>Pending</button>

      {isPending && <p>Updating...</p>}

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id} onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
            {todo.text} - {todo.completed ? "✔" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}
