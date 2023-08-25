import bgImage from "../../../../assets/course-bg.png";

const CourseHeader = () => {
    const backgroundStyle = `background-image:url(${bgImage})`
  return (
    <div className="max-w-[1500px] p-8">
      <div className="flex items-center justify-center h-50">
        <div
          className=' bg-cover bg-center h-50 w-50'
        ></div>
      </div>
    </div>
  );
};

export default CourseHeader;
