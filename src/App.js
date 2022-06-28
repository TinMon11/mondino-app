import "./App.css";
import NavBar from "./NavBar.js";
import ItemListContainer from "./ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"APRENDIENDO REACT"}/>
    </div>
  )}
export default App;
