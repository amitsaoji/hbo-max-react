import Link from "next/link";
import { useStateContext } from "../../HBOProvider";

const SideNav = props => {
  const globalState = useStateContext();
  return (
    <div
      className={`side-nav ${
        globalState.sideNavOpen ? "side-nav--active" : ""
      }`}
    >
      <div
        className="side-nav__close-btn"
        onClick={() => globalState.setSideNavOpenAction(false)}
      >
        <i className="fas fa-times"></i>
      </div>
      <ul className="side-nav__main">
        <li onClick={() => globalState.setSideNavOpenAction(false)}>
          <Link href="/" className="active">
            Home
          </Link>
        </li>
        <li onClick={() => globalState.setSideNavOpenAction(false)}>
          <Link href="/movie" className="active">
            Movies
          </Link>
        </li>
        <li onClick={() => globalState.setSideNavOpenAction(false)}>
          <Link href="/tv" className="active">
            Series
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
