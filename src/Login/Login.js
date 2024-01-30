import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const baseUrl = "http://localhost:3000/login"; // Assuming your users are stored at this endpoint
  const navigate = useNavigate();

  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formActionHandler = (event) => {
    event.preventDefault();
    
    
    axios.get(baseUrl)
      .then((response) => {
        // Check if the entered username and password match any user in the response data
         const user = response.data.find((user) =>  user.name === enteredUserName && user.password === enteredPassword);
         
        if (user) {
          alert("Login success");
          // Redirect to the desired route after successful login
          navigate("/home/");
        } else {
          alert('Login failed. Please check your username and password.');
          console.log("error")
        }
        })
      .catch(error => {
        console.log("Error: ", error);
      });
        
  };

  return (
    <div className="container  login">
      <h1 className="login text-center">Login </h1>
      <form
        className=" py-5  text-center"
        onSubmit={formActionHandler}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label px-2">User Name</label>
          <input
            type="text" 
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={enteredUserName}
            onChange={userNameHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label px-3"> Password </label>
          <input
            type="password"
            id="exampleInputPassword1"
            value={enteredPassword}
            onChange={passwordHandler}
          />
        </div>
        <div className="  mx-5">
        <button type="submit" className="btn btn-primary">Login</button>
        <button type="button" className="btn btn-danger mx-3" onClick={() => navigate("/SignUp/")}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;