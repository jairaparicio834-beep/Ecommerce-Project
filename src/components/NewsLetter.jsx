import React from 'react';

const NewsLetter = () => {
    return (
        <section id='newsletter'>
            <div className="container">
                <div className="row newsletter__row">
                    <h2 className="newsletter__title">
                        NewsLetter
                    </h2>
                    <form action="" className="newsletter__form">
                        <input type="email" placeholder='Enter Email Address' className="newsletter__form__input" />
                        <button type='button' className="newsletter__form__submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

        </section>
    );
}

export default NewsLetter;
