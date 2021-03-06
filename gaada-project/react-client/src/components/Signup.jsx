import React, {useState} from 'react';
import axios from 'axios';

const Signup=(props)=>{
// console.log(props, 'props signup');
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("image");
    const [loggedin, setLoggedin] = useState(false);


    const signup = (e)=>{
        e.preventDefault();
        axios
          .post("/signup", {
            username,
            password,
            email,
            image,
            loggedin
          })
          .then(() => {
              props.changeView('field')
          });
    }

    return(
        <div id="signupContainer">
            <form id="SignUpForm" onSubmit={signup}>
                <h3 id="signin" >Sign Up</h3>
                <br />
                <label id="nameLabel"> Name </label> <br />
                <input id="nameInput" type="text" placeholder="enter your name"
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                />
                <br />
                <label id="emailLabel"> Email </label> <br />
                <input id="emailInput" type="text" placeholder="email@example.com"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <br />
                <label id="passwordLabel"> Password </label> <br />
                <input id="passwordInput" type="password" placeholder="enter your password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                <br />
                <br />
                <button id="signUpBtn" type='submit'> Sign Up </button>
                <button id="cancelBtn" onClick={()=>{props.changeView('home')}} >Exit</button>
            </form>
        </div>
    )
}

export default Signup