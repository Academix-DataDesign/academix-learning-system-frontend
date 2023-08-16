import { useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { RootState } from "../../../Store";
import img from '../../../assets/instructor.png'
import { Button } from "../../UI/Button/Button";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setSearchActive(false);
  };

  const handleCloseClick = () => {
    setMenuActive(false);
    setSearchActive(false);
  };

  const handleSearchClick = () => {
    setSearchActive(true);
    setMenuActive(false);
  };

  return (
    <nav>
      <div className={`menu-icon ${menuActive ? "hide" : ""}`} onClick={handleMenuClick}>
        <span>
          <FaBars />
        </span>
      </div>
      <div className="logo">Academix</div>
      <div className={`nav-items ${menuActive ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <Link to={'/courses'}>
          <a href="#">Courses</a>
          </Link>
        </li>
      </div>
      <div className={`search-icon ${searchActive ? "hide" : ""}`} onClick={handleSearchClick}>
        <span>
          <FaSearch />
        </span>
      </div>
      <div className={`cancel-icon ${searchActive ? "show" : ""}`} onClick={handleCloseClick}>
        <span>
          <FaTimes />
        </span>
      </div>
      <form action="#" className={searchActive ? "active" : ""}>
        <input
          type="search"
          className="search-data"
          placeholder="Search"
          required
        />
        <button type="submit" style={{ padding: "10px" }} className="search-button">
          <FaSearch />
        </button>
      </form>
      <div className="profile">
        {user ? (
          <>
            <Button style={{ marginLeft: "10px", width: "110px" }}>
              Login
            </Button>
            <Button style={{ marginLeft: "10px", width: "110px" }} variant={"register"}>
              Register
            </Button>
          </>
        ) : (
          <div className="box">
            <img src={img} alt="Profile" />
            <div className="online" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
