import { useState, useEffect } from "react";
import Card from "../../UI/CourseCard/Card";
import Navbar from "../../components/Navbar/Navbar";
import Input from "../../UI/Input/Input";
import axios from "axios";
interface Course {
  thumbnail_path: string;
  duration: number;
  title: string;
  price: number;
  bestseller: boolean;
  category: string;
  description: string;
  id: number;
  instructor: string;
  language: string;
  level: string;
  status: string;
  wishes: number;
}

const Courses = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [courses, setCourses] = useState<Course[]>();
  const filtersArray =
    "Popular,New,React,Laravel,Figma,Python,Nodejs,Full stack";
  const filters = filtersArray.split(",");
  useEffect(() => {
    const apiUrl = "https://api.academix.me/api/v1/courses";

    // Retrieve the API key from local storage
    const apiKey = localStorage.getItem("token");

    if (apiKey) {
      axios
        .get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setCourses(response.data);
          // setCourses(response.data); // Assuming response.data contains the course data
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full">
        <p className="text-5xl font-bold text-center mt-12">Courses</p>
      </div>
      <div className="w-full flex">
        <span className="mt-20 ml-24 inline-block cursor-pointer">
          <svg
            width="40"
            onClick={() => {
              setToggleFilter(!toggleFilter);
            }}
            height="40"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 12.1111C39.8071 12.1111 51 9.6238 51 6.55556C51 3.48731 39.8071 1 26 1C12.1929 1 1 3.48731 1 6.55556C1 9.6238 12.1929 12.1111 26 12.1111Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 6.55469C1 12.7491 11.7528 25.0936 17.2667 31.013C19.2893 33.1571 20.4248 35.9877 20.4444 38.9352V45.4436C20.4444 46.917 21.0298 48.3301 22.0716 49.3719C23.1135 50.4138 24.5266 50.9991 26 50.9991C27.4734 50.9991 28.8865 50.4138 29.9284 49.3719C30.9702 48.3301 31.5556 46.917 31.5556 45.4436V38.9352C31.5556 35.988 32.725 33.1714 34.7333 31.013C40.25 25.0936 51 12.7519 51 6.55469"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* Content between the SVG icons */}
        <div className="mt-auto w-full flex mx-12 justify-start  text-center">Content Here</div>

        <span className="mr-24 float-right inline-block mt-20">
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setIsSearchVisible(!isSearchVisible)} // Toggle search input visibility
          >
            <path
              d="M35.7347 31.4465H33.4763L32.6758 30.6747C35.5742 27.3128 37.1672 23.0209 37.1641 18.5821C37.1641 14.9069 36.0743 11.3142 34.0325 8.25842C31.9906 5.20262 29.0885 2.82091 25.6931 1.41448C22.2977 0.00805131 18.5614 -0.359935 14.9569 0.357057C11.3523 1.07405 8.04131 2.84382 5.44256 5.44256C2.84382 8.04131 1.07405 11.3523 0.357057 14.9569C-0.359935 18.5614 0.00805131 22.2977 1.41448 25.6931C2.82091 29.0885 5.20262 31.9906 8.25842 34.0325C11.3142 36.0743 14.9069 37.1641 18.5821 37.1641C23.1847 37.1641 27.4157 35.4774 30.6747 32.6758L31.4465 33.4763V35.7347L45.7404 50L50 45.7404L35.7347 31.4465ZM18.5821 31.4465C11.4637 31.4465 5.71756 25.7004 5.71756 18.5821C5.71756 11.4637 11.4637 5.71756 18.5821 5.71756C25.7004 5.71756 31.4465 11.4637 31.4465 18.5821C31.4465 25.7004 25.7004 31.4465 18.5821 31.4465Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
      {isSearchVisible && (
        <span className="mr-24 float-right inline-block mt-20">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded p-2"
          />
        </span>
      )}

      <div className="w-full flex h-full mt-5  bg-indigo-50">
        {toggleFilter ? (
          <div className="h-full w-[25%]  bg-white flex flex-col  border-r border-black border-2">
            <div className="float-right block p-3 cursor-pointer justify-end items-end ml-auto">
              <svg
                width="34"
                onClick={() => {
                  setToggleFilter(!toggleFilter);
                }}
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 32L17 17L32 32M32 2L16.9971 17L2 2"
                  stroke="#8C8C8C"
                  stroke-width="3.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded p-2 mx-10 mt-8"
            />
            <div className="mt-10 mx-10">
              <p className="text-neutral-600 text-2xl font-normal ">
                Mostlty searched
              </p>
              <div className="mt-2 flex flex-col">
                {filters.map((name, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-start gap-2 mx-2"
                  >
                    <Input type="checkbox" className="w-8 h-8" />
                    <p className="text-cyan-800 text-2xl my-auto font-normal">
                      {name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={` mx-5 md:mx-5 my-10  grid grid-cols-1 gap-10 ${
            toggleFilter
              ? "cs:grid-cols-3 xl:grid-cols-4 lg:grid-cols-2  md:grid-cols-2"
              : "md:grid-cols-2 cs:grid-cols-4 xl:grid-cols-5"
          }`}
        >
          {courses &&
            courses.map((items: Course, index: number) => (
              <Card
                key={index}
                image={items.thumbnail_path}
                length={items.duration}
                lessons={200}
                name={items.title}
                price={items.price}
                stars={4}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
