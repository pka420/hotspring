import React from "react";
import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/General/Navbar/Navbar";

function App() {
  return (
    <>
    <CssBaseline />
      <Provider store={store}>
                <div className="background-container">
        <Navbar />
                </div>
      </Provider>
    </>
  );
}

export default App;
