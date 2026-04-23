import React from 'react';
import BannerImg1 from '../assets 13/banner-1.jpg'

const Banner1 = () => {
    return (
        <div id='banner-1'>
            <div className="container">
                <div className="row">
                    <div className="banner">
                        <div className="banner__text">
                            <h2 className="banner__text__title">
                                Creative Harmonious Living
                            </h2>
                            <p className="banner__text__paragraph">
                                RAOUF Products are all made to standard sizes so that you can mix and match them freely.
                            </p>
                            <a href="" className="banner__text__btn">
                                Show Now
                            </a>
                        </div>
                        <img src={BannerImg1} alt="" className="banner__img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner1;
