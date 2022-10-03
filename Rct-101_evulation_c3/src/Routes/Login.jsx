import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext, AuthContext } from "../Context/AppContext";

function Login() {

  const auth =useContext(AppContext)

  const [state,setState] =useState({
    email:"",
    password:""
  })
 

  const handleChange=(e)=>{
    const {value,name}=e.target

    setState({
      ...state,
      [name]:value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(state)
    })
    .then(res=>res.json())
    .then((res)=>{
      // console.log(res)
      auth.loginUser(res.token)
    })
    
  
  }
  // console.log(auth.Auth)

  if(auth.authState.isAuth){
    return (<Navigate to="/dashboard"/>);
  }
  

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            <input data-testid="email-input" name="email" type="email" value={state.email} onChange={handleChange} placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={state.password} onChange={handleChange}
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button  data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
  
}
export default Login;
