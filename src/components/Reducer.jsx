import React, { useReducer } from "react";

const Reducer = () => {
  const intialValue = {
    name: "",
    age: "",
    email: "",
  };
  const formReducer = function (state, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.playload };
      case "SET_AGE":
        return { ...state, age: action.playload };
      case "SET_EMAIL":
        return { ...state, email: action.playload };
    }
  };
  const [state, dispath] = useReducer(formReducer, intialValue);
  return (
    <form action="">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispath({ type: "SET_NAME", playload: e.target.value })
        }
        placeholder="enter your name"
        required
      />
      <input
        type="number"
        value={state.age}
        onChange={(e) => dispath({ type: "SET_AGE", playload: e.target.value })}
        placeholder="enter your age"
        required
      />
      <input
        type="email"
        value={state.email}
        onChange={(e) =>
          dispath({ type: "SET_EMAIL", playload: e.target.value })
        }
        placeholder="enter your email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Reducer;
