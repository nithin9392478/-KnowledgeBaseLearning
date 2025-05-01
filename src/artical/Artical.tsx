import Slider from 'react-slick';
import QuickHelp from '../QuickHelp/QuickHelp';
import './Artical.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticalCard from './ArticalCard';
import ArticalData from './ArticalData';
import ArticalNavigation from './ArticalNavigation';

const Artical = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
    };


    return (
        <div className="d-flex justify-content-between">
            <div className="col-sm-8">
                <div className='d-flex justify-content-end'>
                    <div className="col-sm-11 fs-4 fw-bold d-flex p-2">
                        <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                        IT Articles Category
                    </div>
                </div>
                <div className="row d-flex justify-content-end align-items-center flex-wrap gap-3">
                    <div className="col-sm-11 d-flex aligin-items-center justify-content-center gap-2 ">
                        <div className='left-right-icon'>&#60;</div>
                        {
                            ArticalNavigation.map((artical) => (
                                <div key={artical.title} className='artical-header px-3 d-flex justify-content-center align-items-center'>{artical.title}</div>
                            ))
                        }
                        <div className='left-right-icon'>&#62;</div>
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-end'>
                    <div className='col-sm-11'>
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
                </div>
            </div>
            <QuickHelp />
        </div>
    );
};

export default Artical;
