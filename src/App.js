import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div>
      <div className="App">
      <NavBar/>
      </div>
      <div className='flex-row flex-wrap'><ItemListContainer greeting={"APRENDIENDO REACT"}/>
      </div> 
    
    </div>
  )}
export default App;
