import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div class="navbar bg-base-300 rounded-md w-4/5 mx-auto	">
      <div class="flex-1">
        <a class="btn normal-case text-xl">TodoMedias</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-5">
          <li>
            <a>Hombre</a>
          </li>
          <li>
            <a>Mujer</a>
          </li>
          <li>
            <a>Niños</a>
          </li>
        </ul>
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
