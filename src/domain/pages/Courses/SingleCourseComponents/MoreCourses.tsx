import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import Card from "../../../UI/CourseCard/Card";
import "swiper/css";
import "swiper/css/navigation";
import SliderButtons from "../../../components/CourseInfo/SliderButtons";

const MoreCourses = () => {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-5 bg-white shadow-lg">
      <p className="text-sky-800 text-3xl font-normal">More by instructor</p>
      <div className="h-px w-[95%] mx-auto shadow border border-white" />
      <div className="w-full">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 4,
            },
            2100: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={1}
          loop
          initialSlide={1} 
          modules={[Pagination, A11y]}
          className="mySwiper !flex !justify-center !flex-col gap-3 !items-center min-h-[600px]"
          pagination={true}
        >
          <SwiperSlide className="h-fit  ">
            <Card
              image="sdsdasd"
              length={16}
              lessons={200}
              name={"React course"}
              price={199}
              stars={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="sdsdasd"
              length={16}
              lessons={200}
              name={"React course"}
              price={199}
              stars={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="sdsdasd"
              length={16}
              lessons={200}
              name={"React course"}
              price={199}
              stars={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="sdsdasd"
              length={16}
              lessons={200}
              name={"React course"}
              price={199}
              stars={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="sdsdasd"
              length={16}
              lessons={200}
              name={"React course"}
              price={199}
              stars={4}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="sdsdasd"
              length={16}
              lessons={200}
              name={"React course"}
              price={199}
              stars={4}
            />
          </SwiperSlide>
          <SliderButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default MoreCourses;
