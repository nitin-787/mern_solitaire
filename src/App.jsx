//
import React from "react";
import Inline from "./components/Inline";
import List from "./components/List";
import Hook from "./components/Hook";
import Hook1 from "./components/Hook1";
import Hook2 from "./components/Hook2";
import ToggleForm from "./components/ToggleForm";
import Reducer from "./components/Reducer";
import Routing from "./components/Routing";

const App = () => {
  return (
    <>
      <h1>App Component</h1>
      <Inline />
      <List />
      <Hook />
      <Hook1 />
      <Hook2 />
      <ToggleForm />
      <Reducer />
      <Routing />
    </>
  );
};

export default App;
