import { Link, NavLink, useNavigate } from "react-router-dom";
import {useRef} from "react";
import CartWidget from "./CartWidget"


const NavBar = () => {

  const inputRef = useRef("")
  let navigate = useNavigate()

  function handleClick() {
    navigate("/order/" + inputRef.current.value);
    inputRef.current.value = ""
  }

  return (
    <div className="navbar bg-base-300 rounded-md w-100% mx-auto">
      <div className="flex flex-row flex-wrap mx-auto justify-center">
        <div className="text-xl font-extrabold"><Link to="/">SOCKS SHOP</Link></div>

        <ul className="menu menu-horizontal p-5">
          <li><NavLink to="/category/hombre">HOMBRE</NavLink></li>
          <li><NavLink to="/category/mujer">MUJER</NavLink></li>
        </ul>
        <div className="form-control flex flex-row">
          <input
            type="text"
            id="OrderId"
            placeholder="Search order (Example: gXE9yCbYfREgQpLSJEIQ)"
            className="input input-bordered w-96"
            ref={inputRef}
          />

          {/* <Link to={"./order/" + inputRef.current.value}>  */}
          <button onClick={handleClick} className="btn btn-ghost btn-circle ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          {/* </Link> */}
          <CartWidget />
        </div>
      </div>
    </div>
  )
}

export default NavBar;