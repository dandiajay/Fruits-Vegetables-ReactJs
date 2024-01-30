import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp=()=>{
    const baseUrl="http://localhost:3000/login"; // Assuming your users are stored at this endpoint
    const navigate = useNavigate();


    const [enteredUserName,setenteredUserName]=useState('');
    const [enteredPassword,setenteredPassword]=useState('');

    const UserNameHandler=(event)=>{
        setenteredUserName(event.target.value);
    }
    const PasswordHandler=(event)=>{
        setenteredPassword(event.target.value);
    }

    const formActionHandler=(event)=>{
        event.preventDefault();
        console.log(enteredUserName);
        console.log(enteredPassword);
        axios.post(baseUrl,{
            name:enteredUserName,
            password:enteredPassword
        }).then((response)=>{
            alert("successfully login "+enteredUserName);
            navigate("/");//if login successfully it will navigate to login form
        }).catch(error=>{
            alert("error===>"+error)
        })
    }
    return(
        <div class="container">
            <h1 className="login text-center">SignUp</h1>
            <form class="text-center py-5 "
            onSubmit={formActionHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label px-2">User Name</label>
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp"
    value={enteredUserName} onChange={UserNameHandler}
    required/>
      </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label px-3">Password</label>
    <input type="password"  id="exampleInputPassword1" 
    value={enteredPassword} onChange={PasswordHandler}
    required/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <div className="text-danger text-decoration-none py-2" ><Link to="/">back to login</Link></div>
  
</form>
        </div>
    )
}

export default SignUp;