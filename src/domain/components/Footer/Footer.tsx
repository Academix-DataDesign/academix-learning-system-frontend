import logo from "../../../assets/Academix-Logo.png";
import home from "../../../assets/home.svg";
import people from "../../../assets/people.svg";
import squares from "../../../assets/squares.svg";
import triangles from "../../../assets/square_triangle.svg";

const Footer = () => {
  return (
    <footer className=" w-full " style={{background: 'linear-gradient(90deg, rgb(17, 77, 146) 0%, rgb(73, 148, 200) 100%)'}}>
      <div className="mx-12 flex justify-between gap-4">
        <div className="flex items-center justify-around">
          <img src={logo} alt="Logo" className="w-48 h-48"/>
          <p className="text-5xl text-center font-bold text-white">Academix</p>
        </div>
        <div className="flex justify-between gap-10 my-5">
        <div className="flex flex-col justify-center items-center">
          <p className=" text-white text-3xl font-bold">Navigation</p>
          <div className=" w-full h-px opacity-50 shadow border border-white"></div>
          <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="flex gap-2 mx-3">
              <img src={home} alt="home" />
              <p className="text-white text-xl font-normal text-center">Home</p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={people} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                About
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={squares} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Categories
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={triangles} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Courses
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className=" text-white text-3xl font-bold">Contact</p>
          <div className=" w-full h-px opacity-50 shadow border border-white"></div>
          <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="flex gap-2 mx-3">
              <img src={home} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Phone
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={people} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Email
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={squares} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Categories
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={triangles} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Courses
              </p>
            </div>
          </div>
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className=" text-white text-3xl font-bold">Social Media</p>
          <div className=" w-full h-px opacity-50 shadow border border-white"></div>
          <div className="flex flex-col gap-2 mt-2 w-full">
            <div className="flex gap-2 mx-3">
              <img src={home} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Instagram
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={people} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                LinkdIn
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={squares} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                Github
              </p>
            </div>
            <div className="flex gap-2 mx-3">
              <img src={triangles} alt="home" />
              <p className="text-white text-xl font-normal text-center">
                X
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
