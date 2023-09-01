import bgImage from "../../../../assets/course-bg.png";
import { Button } from "../../../UI/Button/Button";

const CourseHeader = () => {
  return (
    <div>
      <div className="w-full h-72">
        <img
          src={bgImage}
          alt="Image"
          className="w-full h-full object-cover filter brightness-50 opacity-90"
        />
      </div>
      <div className=" w-[95%] h-32 bg-white ml-24   flex justify-between">
        <div className="relative flex gap-6 top-[-90px]">
          <img
            className="rounded-[50%] w-48 h-44"
            src="https://via.placeholder.com/200x178"
          />
          <div className="relative flex flex-col gap-3 top-[30px]">
            <p className="text-center text-white text-6xl font-bold">
              React course
            </p>
            <p className=" text-zinc-800 z-10 text-3xl font-normal">
              Instructor
            </p>
          </div>
        </div>
        <Button className="w-72 h-14 bg-sky-800 rounded mr-16 mt-4">
          <p className="text-center text-white text-2xl font-bold flex justify-center items-center gap-3">
            Play course
            <svg
              width="20"
              height="26"
              viewBox="0 0 20 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.139648V25.1396L19.6429 12.6396L0 0.139648Z"
                fill="#F8F8F8"
              />
            </svg>
          </p>
        </Button>
      </div>
    </div>
  );
};

export default CourseHeader;
