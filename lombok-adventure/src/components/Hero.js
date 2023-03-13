import React from 'react';
import heroImg from './../assets/hero.jpg'

const HeroComp = () => {
    return (
        <div className="heroSection">
            <div className="heroOverlay"></div>
            <img className="heroImg" src={heroImg} alt="img"/>
            <div className="heroContent container col-lg-8">
                <div className="textDiv">
                    <h1 className="heroText">Search your Holiday</h1>
                </div>
                <div className="cardHero">
                    <div className="destInput">
                        <label htmlFor="city">Search Destination :</label>
                        <div className="input flex">
                            <input type="text" placeholder="Search here ..." />
                            <i className="bi bi-geo-alt icon"></i>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select Date :</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <button className="primaryBtn search mb-lg-0">Search</button>
                </div>
            </div>
            
        </div>

        // <section className='hero'>
        //     <div className='overlay'>
        //         <img className='d-block w-100' src={hero}></img>
        //     </div>

        //     <div className='heroContent container'>
        //         <div className='textDiv'>
        //             <h1 className='heroText'>
        //                 Search your Holiday
        //             </h1>
        //         </div>
        //     </div>
        // </section>
    )
}



export default HeroComp;