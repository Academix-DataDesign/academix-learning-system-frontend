import "./NewNavbar.scss";

const NewNavbar = () => {
  return (
    <div className="header">
      <div className="header_div_left">
        <div className="div_sign_up">
          <a className="font_header_right"> SIGN UP </a>
        </div>

        <div className="div_login">
          <a className="font_header_right"> LOG IN </a>
        </div>
        <div className="search_bar_div">
          <input type="search" style={{border: '1px solid white', color: 'white'}} placeholder="Find Freelancers" />
        </div>
      </div>

      <div className="header_div_right">
        <div className="header_div_right_mini">
          <div className="upwork_logo_div">
            <img src="../images/logo/upwork.png" width="100%" height="100%" />
          </div>
          <div className="div_navbar_items">
            <a className="font_header_left"> Home </a>
            <a className="font_header_left"> Courses </a>
            <a className="font_header_left"> Categories </a>
          </div>
          <div className="div_navbar_items">
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;
