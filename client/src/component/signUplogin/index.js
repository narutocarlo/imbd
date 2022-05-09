
import "./index.css"
import {useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUpLogin = () => {
  const history = useNavigate()
  const [loginSignUp, setloginSignUp] = useState({
    name: "",
    email: "",
    password:"",
    isClicked:false
  })
  const onSignupClick = () => {
    setloginSignUp({
      ...loginSignUp,
      isClicked:true
    })
  }

  const onSubmitClick = () => {
    setloginSignUp({
      ...loginSignUp,
      isClicked:false
    })
  }

  const onSignupChange = (e) => {
    const fromname = e.target.name
    const value = e.target.value
    
    setloginSignUp({
      ...loginSignUp,
      [fromname]:value  
      
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (loginSignUp.isClicked) {
      axios.post("http://localhost:4000/signUp", loginSignUp).then((res) =>
        {if (res.data.success === true) {
          history("/")
          console.log(res.data.massage);
        }
        console.log(res.data.massage);
        
      })
    }
    else {
      axios.post("http://localhost:4000/login", loginSignUp).then((res) => {
        
        if (res.data.success === true) {
          history("/")
          console.log(res.data.massage);
        }
        console.log(res.data.massage);
        
      })
    }
    
    
    
    
  }

  return (
      
        <div className="wrapper bg-dark">
      <div className="title-text">
        {
          loginSignUp.isClicked ?
          <div className="title signupb text-light">Signup </div>
          :
          <div className="title login text-light">Login </div>
        }
          
        </div>
        <div  className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login"  />
            <input type="radio" name="slide" id="signup"/>
            <label htmlFor="login" onClick={onSubmitClick}  className="slide login">Login</label>
            <label htmlFor="signup" onClick={onSignupClick} className="slide signup">Signup</label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            
            {
              loginSignUp.isClicked  ? 
              <form   method='post' onSubmit={onSubmit} className="signup">
              <div className="field">
                <input type="text" name="name" value={loginSignUp.name} placeholder="Full Name" onChange={onSignupChange}  required/>
              </div>
              <div className="field">
                <input type="email" name="email" value={loginSignUp.email} placeholder="Email Address" onChange={onSignupChange} required/>
              </div>
              <div className="field">
                <input type="password" name="password" value={loginSignUp.password} placeholder="Password" onChange={onSignupChange} required/>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit"  value="Signup"/>
              </div>
              </form>
              :
                <form   onSubmit={onSubmit}  className="login" >
                <div className="field">
                  <input type="email" name="email" value={loginSignUp.email} onChange={onSignupChange} placeholder="Email Address" required/>
                </div>
                <div className="field">
                  <input type="password" name="password" value={loginSignUp.password} onChange={onSignupChange} placeholder="Password" required/>
                </div>
                <div className="pass-link"><a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit"   value="Login"/>
                </div>
              </form>

              }
          </div>
        </div>
      </div>
  
    )
}

export default SignUpLogin