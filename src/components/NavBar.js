import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="navbar bg-base-300 rounded-md w-4/5 mx-auto	">
          <div className="flex-1">
            <a className="btn normal-case text-xl">TodoMedias</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-5">
              <li><a>Hombre</a></li>
              <li><a>Mujer</a></li>
              <li><a>Niños</a></li>
            </ul>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
            <CartWidget/>
          </div>
    </div>
      ) }

export default NavBar;