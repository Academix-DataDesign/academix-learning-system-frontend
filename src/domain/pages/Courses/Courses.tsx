import React, { useState } from 'react';
import Card from "../../UI/CourseCard/Card";
import Navbar from "../../components/Navbar/Navbar";

const Courses = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State for search input visibility

  return (
    <>
      <Navbar />
      <div className="w-full">
        <p className="text-5xl font-bold text-center mt-12">Courses</p>
      </div>
      <span className="mt-20 ml-24 inline-block">
        <svg
          width="40"
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
      {/* Conditionally render search input based on isSearchVisible */}
      
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
      {isSearchVisible && (
        <span className="mr-24 float-right inline-block mt-20">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded p-2"
          />
        </span>
      )}
      <div className="w-full h-[1000px] mt-5 bg-indigo-50">
        <div className="lg:mx-20 md:16 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xs:grid-cols-5 gap-10">
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
          <Card image="sdasd" length={16} lessons={200} name="React course" price={300} stars={4} />
        </div>
      </div>
    </>
  );
};

export default Courses;
