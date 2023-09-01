import courseImage from "../../../../assets/course-bg.png";

const CourseInfo = () => {
  return (
    <div className="p-8 flex  mx-auto gap-10">
      <div className="flex flex-col gap-10 h-[450px] shadow-lg ">
        <div className="w-[350px] flex flex-col">
          <img
            src={courseImage}
            alt="Course Image"
            className="w-full h-full object-cover"
          />
          <div className="flex gap-14 p-4">
            <div>
              <p className=" text-lime-700 text-3xl font-bold pb-6">Owned</p>
              <p className="text-zinc-800 text-lg font-normal">Difficulty:</p>
              <div className="flex text-center py-2">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.6041 11.6103L25.181 12.4803C25.2783 12.5339 25.3588 12.6098 25.4147 12.7005C25.4706 12.7912 25.5 12.8937 25.5 12.998C25.5 13.1023 25.4706 13.2049 25.4147 13.2956C25.3588 13.3863 25.2783 13.4622 25.181 13.5157L13 20.2375L0.819021 13.5157C0.721739 13.4622 0.641214 13.3863 0.585302 13.2956C0.52939 13.2049 0.5 13.1023 0.5 12.998C0.5 12.8937 0.52939 12.7912 0.585302 12.7005C0.641214 12.6098 0.721739 12.5339 0.819021 12.4803L2.39592 11.6103L13 17.4631L23.6041 11.6103ZM23.6041 17.2821L25.181 18.1522C25.2783 18.2057 25.3588 18.2816 25.4147 18.3723C25.4706 18.4631 25.5 18.5656 25.5 18.6699C25.5 18.7742 25.4706 18.8767 25.4147 18.9674C25.3588 19.0582 25.2783 19.134 25.181 19.1876L13.6756 25.5376C13.4716 25.6504 13.238 25.71 13 25.71C12.762 25.71 12.5284 25.6504 12.3244 25.5376L0.819021 19.1876C0.721739 19.134 0.641214 19.0582 0.585302 18.9674C0.52939 18.8767 0.5 18.7742 0.5 18.6699C0.5 18.5656 0.52939 18.4631 0.585302 18.3723C0.641214 18.2816 0.721739 18.2057 0.819021 18.1522L2.39592 17.2821L13 23.1349L23.6041 17.2821ZM13.6743 0.518789L25.181 6.86884C25.2783 6.92241 25.3588 6.99826 25.4147 7.089C25.4706 7.17973 25.5 7.28225 25.5 7.38654C25.5 7.49084 25.4706 7.59336 25.4147 7.68409C25.3588 7.77482 25.2783 7.85068 25.181 7.90425L13 14.626L0.819021 7.90546C0.721739 7.85188 0.641214 7.77603 0.585302 7.6853C0.52939 7.59456 0.5 7.49205 0.5 7.38775C0.5 7.28345 0.52939 7.18094 0.585302 7.0902C0.641214 6.99947 0.721739 6.92361 0.819021 6.87004L12.3244 0.519995C12.5284 0.40723 12.762 0.347656 13 0.347656C13.238 0.347656 13.4716 0.40723 13.6756 0.519995L13.6743 0.518789Z"
                    fill="#1E2F97"
                  />
                </svg>
                <p className="text-center w-full text-lg pl-2">200 Lessons</p>
              </div>
              <p className="text-zinc-800 text-lg font-normal">Certificate:</p>
              <p className="text-zinc-800 text-lg font-normal">Assigments:</p>
              <p className="text-zinc-800 text-lg font-normal">Tests:</p>
            </div>
            <div>
              <p className=" text-lime-700 text-3xl font-bold pb-6">Owned</p>
              <div className="flex">
                <svg
                  className="w5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w5 h-5 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="flex gap-1 justify-end mt-4 mb-3">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 23.1737C15.1522 23.1737 17.6957 22.1049 19.5711 20.2024C21.4464 18.2998 22.5 15.7194 22.5 13.0288C22.5 10.3382 21.4464 7.75781 19.5711 5.85527C17.6957 3.95273 15.1522 2.88389 12.5 2.88389C9.84783 2.88389 7.3043 3.95273 5.42893 5.85527C3.55357 7.75781 2.5 10.3382 2.5 13.0288C2.5 15.7194 3.55357 18.2998 5.42893 20.2024C7.3043 22.1049 9.84783 23.1737 12.5 23.1737ZM12.5 0.347656C14.1415 0.347656 15.767 0.675664 17.2835 1.31295C18.8001 1.95024 20.1781 2.88433 21.3388 4.06188C22.4996 5.23944 23.4203 6.6374 24.0485 8.17595C24.6767 9.71449 25 11.3635 25 13.0288C25 16.3921 23.683 19.6176 21.3388 21.9958C18.9946 24.3739 15.8152 25.71 12.5 25.71C5.5875 25.71 0 20.0035 0 13.0288C0 9.66556 1.31696 6.44006 3.66117 4.06188C6.00537 1.6837 9.18479 0.347656 12.5 0.347656ZM13.125 6.68824V13.3458L18.75 16.7317L17.8125 18.2915L11.25 14.2969V6.68824H13.125Z"
                    fill="#D766E9"
                  />
                </svg>
                <p>16h</p>
              </div>
              <p className="text-lime-700 text-opacity-70 text-lg font-normal text-right">
                Yes
              </p>
              <p className="text-lime-700 text-opacity-70 text-lg font-normal text-right">
                Yes
              </p>
              <p className="text-red-600 text-opacity-70 text-lg font-normal text-right">
                No
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-sky-800 text-xl font-normal uppercase">
          SKILLS you will learn
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className=" w-40 h-10 bg-purple-400 bg-opacity-20 rounded-sm text-center flex items-center justify-center border border-purple-400">
            <p className=" text-center text-purple-400 text-base font-normal">
              Print & Editoral
            </p>
          </div>

          <div className=" w-40 h-10  bg-teal-300 bg-opacity-20 text-center flex items-center justify-center rounded-sm border border-teal-300">
            <p className=" text-teal-300 text-base font-normal">Packaging</p>
          </div>

          <div className=" w-40 h-10  bg-red-400 bg-opacity-20 rounded-sm text-center flex items-center justify-center border border-red-400">
            <p className="text-center text-red-400 text-base font-normal">
              Web -Disgn
            </p>
          </div>

          <div className=" w-40 h-10 text-center flex items-center justify-center  bg-amber-400 bg-opacity-20 rounded-sm border border-amber-400">
            <p className="text-center text-amber-400 text-base font-normal">
              UI/UX
            </p>
          </div>

          <div className="w-40 h-10 text-center flex items-center justify-center  bg-blue-500 bg-opacity-20 rounded-sm border border-blue-500">
            <p className="text-center text-blue-500 text-base font-normal">
              Brandring
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 justify-between">
        <div className="bg-white shadow-lg p-12">
          <p className="text-sky-800 text-3xl font-normal">Description</p>
          <div className="Line8 w-full h-px shadow border border-white"></div>
          <p className="pl-10 pt-3 text-neutral-600 text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white shadow-lg p-12">
          <p className="text-sky-800 text-3xl font-normal">Required</p>
          <div className="Line8 w-full h-px shadow border border-white"></div>
          <p className="pl-10 pt-3 text-neutral-600 text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="bg-white shadow-lg p-12">
          <p className="text-sky-800 text-3xl font-normal">You will learn</p>
          <div className="Line8 w-full h-px shadow border border-white"></div>
          <p className="pl-10 pt-3 text-neutral-600 text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
