import React from 'react';
import BannerImg2 from '../assets 13/banner-2.jpg'

const Banner2 = () => {
    return (
        <div id='banner-2'>
            <div className="container">
                <div className="row">
                    <div className="banner banner-2">
                        <div className="banner__text">
                            <h2 className="banner__text__title">
                                Comfortable and ELegant Living
                            </h2>
                            <p className="banner__text__paragraph">
                                RAOUF Products are all made to standard sizes so that you can mix and match them freely.
                            </p>
                            <a href="" className="banner__text__btn">
                                Show Now
                            </a>
                        </div>
                        <img src={BannerImg2} alt="" className="banner__img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner2;
