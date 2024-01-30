import Header from "./Header";
import { useNavigate } from "react-router-dom";

import Slick from "./slick";
import Footer from "./Footer";
import Image from '../assets/Images/home.png.png'
import Certificate1 from '../assets/Images/certificate1.png.png';
import Certificate2 from '../assets/Images/certificate2.png.png';
import Certificate3 from '../assets/Images/certificate3.png.png';



const Home = () => {
  const navigate = useNavigate();

    return (
        <>
  <Header />
  <div className=" container-fluid header">
        <div class="container col-xxl-8   py-5 header">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 ">
      <div class="col-10 col-sm-8  col-lg-6 align-items-center">
        <img src={Image} class="d-block mx-lg-auto img-fluid mt-5" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-3  fw-bold text-body-emphasis lh-1 mb-3 home-heading ">Vegetable for Health and Nutrition</h1>
        <p class="lead">Fruits and vegetables are nature's bounty, rich in vitamins, minerals, and fiber. They come in vibrant hues and diverse flavors, offering a spectrum of nutrition. Eating a colorful array ensures a balanced diet, promoting overall health and well-being. Incorporate them into meals for a delicious and nutritious lifestyle.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-danger btn-lg px-4 me-md-2" onClick={()=>navigate("/fruits/")}>Shop Your Fruits</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={()=>navigate("/vegetable/")}>shop Your Vegetable</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  

 {/* certificate */}
 <div className='container  mt-5 px-4 py-5 delivery-process '>
 <h2 className='text-center display-2 fw-bold'>How Delivery Works</h2>
<div className='row  g-4 py-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1'>
  <div className='col mb-3 text-center'>
    <img src={Certificate1} className='img-fluid w-50 h-75' />
    <h5 className='my-3'>We Deliver the bag</h5>
  </div>
  <div className='col mb-3 text-center'>
    <img src={Certificate2} className='img-fluid w-50 h-75' />
    <h5  className='my-3'>You Enjoy Your Veg</h5>
  </div>
  <div className='col mb-3 text-center'>
    <img src={Certificate3} className='img-fluid w-50 h-75 '/>
    <h5  className='my-3'>Pick  Your Veg</h5>
  </div>
</div>
  </div>
  {/* certificate-end */}



          {/* slick */}
 <div className="container-fluid" style={{backgroundColor:"bisque"}}>
 <Slick/>
  </div>
  {/* footer */}
  <Footer/>
        </>



    )
}
export default Home;



