import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducer/reducer";
import Input from "./components/Input/input";
import TodoTasks from "./components/TodoList/Todo";
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(todoReducer, reduxDevtools && reduxDevtools());

function App(props) {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Input />
        <TodoTasks />
      </div>
    </Provider>
  );
}

export default App;
