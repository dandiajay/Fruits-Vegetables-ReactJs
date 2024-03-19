import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Header />

      <div className="container" style={{ width: '100%' }}>
        <div className="row m-3" >
          <div className="col-lg-6 col-md-12 col-sm-12 col-12" style={{marginTop:"10vh"}}>
            <div className="iframe">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.954921422336!2d78.47095387606363!3d17.46187155797691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b7278b4afcd%3A0xf1ad268119d623e8!2sFRESH%20FRUITS%20and%20VEGETABLES!5e0!3m2!1sen!2sin!4v1701430983736!5m2!1sen!2sin"
                height={"350px"} width={"100%"}
                style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 bg-light ContactUs mt-3">
            <form className="py-4">
              <h1 className="text-center">Contact Us</h1>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone no
                </label>
                <input type="tel" id="phoneNumber" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary d-block mx-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
