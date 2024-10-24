import React from "react";
const Footer = () => {
    return (
        <div>

            <div className="container-fluid footer">
                <div className="d-flex flex-column  align-items-center">
                    <i className="bi bi-envelope text-white display-5"></i>
                    <h2 className="text-white mt-3">Stay informed about special offers</h2>
                    <p className="text-white mt-2">subscribe to the newsletter</p>
                     <div class="row justify-content-center">
        <div class="col-md-12 col-sm-8 col-12 col-lg-12">
            <div class="input-group mb-3">
                <input type="text" class="form-control"  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-warning" type="button" id="button-addon2">Subscribe</button>
            </div>
        </div>
    </div>
                </div>

                <div class="container">
                    <footer>
                        <div class="row">
                            <div class="col-4 col-md-3 mb-3">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                                </ul>
                            </div>

                            <div class="col-4 col-md-3 mb-3">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                                </ul>
                            </div>

                            <div class="col-4 col-md-3  mb-3">
                                <h5>Section</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                                </ul>
                            </div>


                        </div>
                    </footer>
                </div>
                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
                    <p>&copy; 2022 Company, Inc. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}
export default Footer;