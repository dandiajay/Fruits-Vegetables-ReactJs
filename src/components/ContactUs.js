import Footer from "./Footer";
import Header from "./Header";

const ContactUs=()=>{
    return(
        <>
        <Header />
        
        <div className="container">
        <div className="row mb-3" style={{marginTop:"100px"}}>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.954921422336!2d78.47095387606363!3d17.46187155797691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b7278b4afcd%3A0xf1ad268119d623e8!2sFRESH%20FRUITS%20and%20VEGETABLES!5e0!3m2!1sen!2sin!4v1701430983736!5m2!1sen!2sin" width="600" height="450" style={{border:"0",  allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>           
             </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 bg-light ContactUs">
            <form className=" py-4">
            <h1 className="text-center">Contact Us</h1>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label class="form-label" for="typeNumber">Phone no</label>
    <input type="number" id="typeNumber" class="form-control" />
</div>
  <button type="submit text-center" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
        </div>

        <Footer />
        </>
    )
}
export default ContactUs;