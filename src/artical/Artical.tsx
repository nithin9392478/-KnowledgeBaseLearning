import Slider from 'react-slick';
import QuickHelp from '../QuickHelp/QuickHelp';
import './Artical.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticalCard from './ArticalCard';
import ArticalData from './ArticalData';
import ArticalNavigation from './ArticalNavigation';
import {useState } from 'react';

const Artical = () => {
    const [currentID,setCurrentId] = useState(0);
    const [data, setData] = useState<{ id: number; title: string }[]>(ArticalNavigation.slice(0, 3));
    const settings = {
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true,
                }
            }
        ]
    };


    const clickNext = () => {
        
        if (currentID + 1 < ArticalNavigation.length) {
            setCurrentId(currentID + 1);
            setData(ArticalNavigation.slice(currentID+1, currentID+1 + 3));
        }
    };
    
    const clickPrevious = () => {
    
        if (currentID - 1 >= 0) {
            setCurrentId(currentID - 1);
            setData(ArticalNavigation.slice(currentID-1, currentID-1 + 3));
        } else {
            setCurrentId(0);
            setData(ArticalNavigation.slice(0, 3));
        }
    };
    
    
    return (
        <div className="d-flex justify-content-between flex-wrap">
            <div className="col-lg-8 col-12">
                <div className='d-flex artical-heading'>
                    <div className="col-sm-11 fs-4 fw-bold d-flex p-2">
                        <div className='d-flex justify-content-center'><div className='artical-border h-100'></div></div>
                        IT Articles Category
                    </div>
                </div>
                <div className="row d-flex justify-content-end align-items-center flex-wrap gap-3">
                    <div className="col-sm-11 d-flex aligin-items-center justify-content-center gap-2 ">
                        <div className={`left-right-icon ${currentID === 0 ? 'disabled' : ''}`} onClick={clickPrevious}>&#60;</div>
                        {
                            data.map((artical) => (
                                <div key={artical.id} className='artical-header px-3 d-flex justify-content-center align-items-center'>{artical.title}</div>
                            ))
                        }
                        <div className={`left-right-icon ${currentID + 3 >= ArticalNavigation.length ? 'disabled' : ''}`} onClick={clickNext}>&#62;</div>
                    </div>
                </div>
                <div className='artical-container'>
                    <div className='col-sm-11 artical-image-container'>
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







