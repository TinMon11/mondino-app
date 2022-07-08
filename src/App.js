import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div>
      <div className="App">
      <NavBar/>
      </div>
      <div className='flex-row flex-wrap'><ItemListContainer greeting={"APRENDIENDO REACT"}/>
      </div> 
      <ItemDetailContainer/>
    </div>
  )}
export default App;


