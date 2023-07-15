import './Navbar.scss'

const Navbar = () => {
  return (
    <header className="header">
      <div
        className="avatar"
        style={{
          backgroundImage:
            "url(https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/ikonica@2x.png)",
        }}
      >
        <div className="ellipse-4" />
      </div>
      <div className="navbar">
        <div className="text-wrapper-37">Courses</div>
        <div className="text-wrapper-38">Categories</div>
        <div className="text-wrapper-39">About</div>
        <div className="text-wrapper-40">Home</div>
      </div>
      <img
        className="logo-2"
        alt="Logo"
        src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/logo-1@2x.png"
      />
    </header>
  );
};

export default Navbar;
