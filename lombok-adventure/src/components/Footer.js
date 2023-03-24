import React from 'react'
import footerImg from './../assets/footer-img.jpg'

const Footer = () => {
  return (
    <div className="footerSection mt-5">
        <img className="footerImg" src={footerImg} alt="img"/>
        <div className="footerContent container">
            <div className="keepintouch">
                <div className="col-lg-4 px-5">
                    <h4 className="text-white">Keep in Touch</h4>
                    <h1 className="footerText">Get Ready to Travel with Us</h1>
                </div>
                <div className="cardForm col-lg-4">
                    <div className="nameInput">
                        <label htmlFor="name">Name :</label>
                        <div className="nameInput input flex">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="nameInput">
                        <label htmlFor="email">Email :</label>
                        <div className="nameInput input flex">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="messageInput">
                        <label htmlFor="message">Message :</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <div className="d-flex mt-3 align-items-end flex-column">
                        <button className="primaryBtn send">Send</button>    
                    </div>
                </div>
            </div>
            <div className="footer">
                <div class="card rounded-4">
                    <div className="cardFooter">
                        <div className="cardFooter w-100">
                        <div class="card-body w-100">
                            <h5 class="card-title py-2">Lombok Trv</h5>
                            <p class="card-text descFooter">consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
                            <a href="#instagram"><i className="bi bi-instagram pe-2"></i></a>
                            <a href="#facebook"><i className="bi bi-facebook pe-2"></i></a>
                            <a href="#twitter"><i className="bi bi-twitter pe-2"></i></a>
                            <a href="#youtube"><i className="bi bi-youtube pe-2"></i></a>
                        </div>
                        </div>
                        <div className="cardFooter w-100">
                            <div className="card-body">
                                <h6 class="card-title py-2">Our Agency</h6>
                                <a class="card-text footer" href="#services"><i class="bi bi-chevron-right pe-1"></i>Services</a><br></br>
                                <a class="card-text footer" href="#tourism"><i class="bi bi-chevron-right pe-1"></i>Tourism</a><br></br>
                                <a class="card-text footer" href="#agency"><i class="bi bi-chevron-right pe-1"></i>Agency</a><br></br>
                                <a class="card-text footer" href="#insurance"><i class="bi bi-chevron-right pe-1"></i>Insurance</a><br></br>
                                <a class="card-text footer" href="#payment"><i class="bi bi-chevron-right pe-1"></i>Payment</a>
                            </div>
                            <div className="card-body">
                                <h6 class="card-title py-2">Partners</h6>
                                <a class="card-text footer" href="#booking"><i class="bi bi-chevron-right pe-1"></i>Booking</a><br></br>
                                <a class="card-text footer" href="#rentalcar"><i class="bi bi-chevron-right pe-1"></i>Rental Car</a><br></br>
                                <a class="card-text footer" href="#trivago"><i class="bi bi-chevron-right pe-1"></i>Trivago</a><br></br>
                                <a class="card-text footer" href="#tripadvisore"><i class="bi bi-chevron-right pe-1"></i>Trip Advisor</a><br></br>
                                <a class="card-text footer" href="#hotel"><i class="bi bi-chevron-right pe-1"></i>Hotel</a>
                            </div>
                            <div className="card-body">
                                <h6 class="card-title py-2">Last Destinations</h6>
                                <a class="card-text footer" href="#pinkbeach"><i class="bi bi-chevron-right pe-1"></i>Pink Beach</a><br></br>
                                <a class="card-text footer" href="#sembalunvillage"><i class="bi bi-chevron-right pe-1"></i>Sembalun VIllage</a><br></br>
                                <a class="card-text footer" href="#segerbeach"><i class="bi bi-chevron-right pe-1"></i>Seger Beach</a><br></br>
                                <a class="card-text footer" href="#rinjanimountain"><i class="bi bi-chevron-right pe-1"></i>Rinjani Mountain</a><br></br>
                                <a class="card-text footer" href="#gilimeno"><i class="bi bi-chevron-right pe-1"></i>Gili Meno</a>
                            </div>
                        </div>
                        
                    </div>
                    

                    <div class="card-footer copyright">
                        <div class="card-text copyright">Travel Website Theme</div>
                        <div class="card-text copyright">Copyright APRZL 2023 - All Right Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer