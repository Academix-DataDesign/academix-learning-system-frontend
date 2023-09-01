import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import CourseHeader from "./SingleCourseComponents/CourseHeader"
import CourseInfo from "./SingleCourseComponents/CourseInfo"
import MoreCourses from "./SingleCourseComponents/MoreCourses"


const SingleCourse = () => {
  return (
    <>
    <Navbar />
    <CourseHeader />
    <CourseInfo />
    <MoreCourses />
    <Footer />
    </>
  )
}

export default SingleCourse