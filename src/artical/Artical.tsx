import Slider from 'react-slick';
import QuickHelp from '../QuickHelp/QuickHelp';
import './Artical.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticalCard from './ArticalCard';
import ArticalData from './ArticalData';
import ArticalNavigation from './ArticalNavigation';
import { useRef, useState } from 'react';
import leftArrow from '../assets/left-arrow.png';
import rightArrow from '../assets/right-arrow.png';

const Artical = () => {
    const [currentID, setCurrentId] = useState(0);
    const navSliderRef = useRef<Slider | null>(null);

    const mainSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true,
                }
            }
        ]
    };

    const navSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const setArticalBackground=(id:number)=>{
        setCurrentId(id);
    }

    return (
        <div className="d-flex justify-content-between flex-wrap">
            <div className="col-lg-8 col-12">
                <div className='d-flex artical-heading'>
                    <div className="col-sm-11 fs-4 fw-bold d-flex p-2">
                        <div className='d-flex justify-content-center'>
                            <div className='artical-border h-100'></div>
                        </div>
                        IT Articles Category
                    </div>
                </div>

                <div className="row d-flex justify-content-end align-items-center flex-wrap gap-3">
                    <div className="col-sm-11 d-flex align-items-center justify-content-center  position-relative">
                        <div className="left-right-icon left-icon d-flex  justify-content-end" onClick={() => navSliderRef.current?.slickPrev()}>
                            {/* &#60; */}
                            <img src={leftArrow} alt="" />
                        </div>

                        <div className="artical-navigation-slider w-75">
                            <Slider ref={navSliderRef} {...navSliderSettings}>
                                {ArticalNavigation.map((artical) => (
                                    <div key={artical.id}>
                                        <div className={`artical-header px-3 d-flex justify-content-center align-items-center w-100 fw-bold ${artical.id === currentID ? "artical-title-background" : ""}`} onClick={() => setArticalBackground(artical.id)}>
                                            {artical.title}
                                        </div>
                                    </div>

                                ))}
                            </Slider>
                        </div>

                        <div className="left-right-icon right-icon" onClick={() => navSliderRef.current?.slickNext()}>
                            {/* &#62; */}
                            <img src={rightArrow} alt="" />
                        </div>
                    </div>
                </div>

                <div className='artical-container'>
                    <div className='col-sm-11 artical-image-container'>
                        <Slider {...mainSliderSettings}>
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
                </div>
            </div>
            <QuickHelp />
        </div>
    );
};

export default Artical;




