import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slide({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;