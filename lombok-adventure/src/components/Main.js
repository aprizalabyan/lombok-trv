import React from 'react'

import img1 from './../assets/img1.jpg'
import img2 from './../assets/img2.jpg'
import img3 from './../assets/img3.jpg'
import img4 from './../assets/img4.jpg'
import img5 from './../assets/img5.jpg'
import img6 from './../assets/img6.jpg'

const DataDestinations = [
    {
        id: 1, imgSrc: img1, destTittle: 'Rinjani Mountain', location: 'Lombok Timur',
        description: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
        fees: '$765'
    },
    {
        id: 2, imgSrc: img2, destTittle: 'Gili Meno', location: 'Lombok Barat',
        description: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
        fees: '$456'
    },
    {
        id: 3, imgSrc: img3, destTittle: 'Seger Beach', location: 'Lombok Tengah',
        description: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
        fees: '$295'
    },
    {
        id: 4, imgSrc: img4, destTittle: 'Kuta Beach', location: 'Lombok Tengah',
        description: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
        fees: '$327'
    },
    {
        id: 5, imgSrc: img5, destTittle: 'Mangku Sakti Waterfall', location: 'Lombok Utara',
        description: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
        fees: '$236'
    },
    {
        id: 6, imgSrc: img6, destTittle: 'Sembalun VIllage', location: 'Lombok Timur',
        description: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.',
        fees: '$264'
    }
]

const DataComments = [
    {
        id: 1, destTittle: 'Rinjani Mountain', location: 'Lombok Timur',
        comment: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.',
        traveler: 'Marc', from: 'Swiss'
    },
    {
        id: 2, destTittle: 'Kuta Beach', location: 'Lombok Tengah',
        comment: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. adipiscing elit duis tristique sollicitudin nibh sit amet commodo.',
        traveler: 'Lauren', from: 'Canada'
    },
    {
        id: 3, destTittle: 'Gili Meno', location: 'Lombok Barat',
        comment: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. duis tristique sollicitudin nibh sit amet commodo nullam.',
        traveler: 'Michael', from: 'Australia'
    }
    // {
    //     id: 4, destTittle: 'Gili Meno', location: 'Lombok Barat',
    //     comment: 'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. duis tristique sollicitudin nibh sit amet commodo nullam.',
    //     traveler: 'Michael', from: 'Australia'
    // }
]

const Main = () => {
  return (
    <div className="container">
        <div className="secTitle">
            <h3 className="fw-semibold">Most Visited Destinations</h3>
        </div>
        <div className="row row-cols-1 g-4">
            {
            DataDestinations.map(({id, imgSrc, destTittle, location, description, fees})=>{
                return(
                    <div className="col col-lg-4 col-md-6 col-12">
                    <div key={id} className="card h-100 pb-2">
                        <div className="cardImg">
                            <img src={imgSrc} className="card-img-top" alt={destTittle} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title fw-semibold">{destTittle}</h5>
                            <div className="cardLocation">
                                <i className="bi bi-geo-alt icon"></i>
                                <a className="card-text link" href="#location">{location}</a>
                            </div>
                            <hr/>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer d-flex flex-row justify-content-center border-0 bg-transparent">
                            <h5 className="card-title fw-semibold">{fees}</h5>
                            <button className="primaryBtn details ms-auto">Details</button>
                        </div>
                    </div> 
                    </div>
                )
            })
            }

        </div>
        <div className="secTitle">
            <h3 className="fw-semibold">Overheard from Travelers</h3>
        </div>
        <div className="row g-4">
            {
            DataComments.map(({id, destTittle, location, comment, traveler, from})=>{
                return(
                    <div className="col col-lg-4 col-md-6 col-12">
                    <div key={id} className="card text-center h-100">
                        <div className="card-body ">
                            <h5 className="card-title fw-semibold mt-2" style={{color: "var(--primaryColor)"}}>{destTittle}</h5>
                                <a className="card-text link" href="#location">{location}</a>
                            <hr/>
                            <p className="card-text">"{comment}"</p>
                            <div className="card-text">
                                <p>- {traveler} from {from}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default Main