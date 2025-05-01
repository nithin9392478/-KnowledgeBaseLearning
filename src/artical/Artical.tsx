import { useEffect, useRef } from 'react';
import QuickHelp from '../QuickHelp/QuickHelp';
import './Artical.css'
import ArticalCard from './ArticalCard';
import ArticalData from './ArticalData';
import ArticalNavigation from './ArticalNavigation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Artical = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 0;
            carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 0;
            carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    const settings = {
        dots: true,
    }

    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="d-flex justify-content-between">
            <div className="col-sm-8">
                <div className='d-flex justify-content-end'>
                    <div className="col-sm-11 fs-4 fw-bold d-flex">
                        <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                        IT Articles Category
                    </div>
                </div>
                <div className="row d-flex justify-content-end align-items-center flex-wrap gap-3">
                    <div className="col-sm-11 d-flex  aligin-items-center justify-content-center gap-2 ">
                        {
                            ArticalNavigation.map((artical) => {
                                return (
                                    <div key={artical.title} className='artical-header px-3 d-flex justify-content-center align-items-center'>{artical.title}</div>
                                )
                            })
                        }
                        <button aria-label="Scroll Right" className="carousel-button next" onClick={scrollRight}>&#10095;</button>
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-end'>
                    <div className='col-sm-11 d-flex flex-wrap align-items-center gap-3'>
                        <div className="carousel-wrapper">
                            <button aria-label="Scroll Left" className="carousel-button prev" onClick={scrollLeft}>&#10094;</button>
                            <div className="carousel-container" ref={carouselRef}>
                                {ArticalData.map((artical) => (
                                    <ArticalCard
                                        key={artical.id}
                                        image={artical.image}
                                        title={artical.heading1}
                                        description={artical.heading2}
                                    />
                                ))}
                            </div>
                            <button aria-label="Scroll Right" className="carousel-button next" onClick={scrollRight}>&#10095;</button>
                        </div>
                    </div>
                </div>
                {/* <div className='d-flex flex-wrap align-items-center justify-content-end'>
                    <div className='col-sm-11 d-flex flex-wrap align-items-center gap-3 image-slider-container'>
                        <Slider {...settings}>
                            {ArticalData.map((artical) => (
                                <ArticalCard
                                    key={artical.id}
                                    image={artical.image}
                                    title={artical.heading1}
                                    description={artical.heading2}
                                />
                            ))}
                        </Slider>
                    </div>
                </div> */}
            </div>
            <QuickHelp />
        </div>
    )
}
export default Artical;
