import login from "../assets/Images/login.png"
import Login from "../Login/Login";
const Login1=()=>{
    return(

      <div className="container-fluid login">
          <div className="container mt-5 login">
        <div className="row " style={{boxShadow: '1px 2px 9px  #F4AAB9'}}>
        <div className="col-md-6 col-lg-6 col-sm-4 col-12" >
          <img src={login} className="img-fluid" />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-8 col-12    " style={{backgroundColor:"bisque"}}>
  <Login />
        </div>
      </div>
      </div>
      </div>
    )
}

export default Login1;