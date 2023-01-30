import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom';
import { categories } from '../../menu/data';

const CategoriesSlider = () => {
  return (
    <div className='category-swiper-container'>
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
            grabCursor={true}
            navigation={true}
            modules={[Navigation]}
            className='categories-slider'
        >
            {categories.map((item) => (
                <SwiperSlide key={item.id} className='categories-slide'>
                    <div className='category-slide-container'>
                        <LazyLoadImage
                            src={item.img}
                            alt='category'
                            effect="blur"
                            placeholderSrc={item.img}
                            className='category-img'
                        />
                        <div>
                            <span>{item.title}</span>
                            <Link to={`/menu#${item.id}`}><button className="swiper-btn">Menyu</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
  )
}

export default CategoriesSlider