import {Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="navbar bg-base-300 rounded-md w-100% mx-auto">
          <div className="flex flex-row flex-wrap mx-auto justify-center">
          <div className="text-xl font-extrabold"><Link to="/">TodoMedias</Link></div>

            <ul className="menu menu-horizontal p-5">
              <li><NavLink to="/category/jewelery">Jewelery</NavLink></li>
              <li><NavLink to="/category/electronics">Electronics</NavLink></li>
            </ul>
            <div className="form-control flex flex-row">
              <input
                type="text"
                placeholder="Buscá tu producto"
                className="input input-bordered w-96"
              />
              <CartWidget/>
            </div>
          </div>  
    </div>
      ) }

export default NavBar;