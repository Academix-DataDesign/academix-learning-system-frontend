import Logo from "../../../assets/Academix-Logo.png";
import { Button } from "../../UI/Button/Button";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header>
      <div className={classes["left-side"]}>
        <span className={classes.logo}>
          <img src={Logo} />
          <span>Academix</span>
        </span>
        <ul className={classes.navbar}>
          <li>
            <span className="active">Home</span>
          </li>
          <li>
            <span>About</span>
          </li>
          <li>
            <span>Courses</span>
          </li>
          <li>
            <span>Categories</span>
          </li>
        </ul>
      </div>
      <div className={classes.main}>
        <span>
          <Button
            variant={"login"}
            style={{ width: "200px", height: "65px", fontSize: "24px" }}
          >
            Login
          </Button>
        </span>
        <span>
          <Button
            variant={"register"}
            style={{ width: "200px", height: "65px", fontSize: "24px" }}
          >
            Register
          </Button>
        </span>
        <div className="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Navbar;
