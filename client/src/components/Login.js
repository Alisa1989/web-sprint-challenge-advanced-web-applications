import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {
  
const initialState = {
  credentials: {
  username: "",
  password: ""
}};

const [formState, setFormState] = useState(initialState);
//const {push} = useHistory();

const userLogin = e => {
  e.preventDefault();
  console.log("logging in")
  axios
    .post("http://localhost:5000/api/login", formState.credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      props.history.push('/protected');
      console.log("token returned");
    })
    .catch(err=>console.log("login error:", err))
};

const handleChanges = e => {
  e.persist();
  //console.log("input change:", e.target.name, e.target.value);
  setFormState({
    credentials: {...formState.credentials, 
    [e.target.name]: e.target.value
  }});
};

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Please Login</p>
      <form onSubmit={userLogin}>
        <label>
          Username:
          <input
            type = "text"
            id =  "username"
            name = "username"
            placeholder = "enter username"
            value = {formState.credentials.username}
            onChange = {handleChanges}
          />
        </label>
        <label>
          Password:
          <input
            type = "text"
            id =  "password"
            name = "password"
            placeholder = "enter password"
            value = {formState.credentials.password}
            onChange = {handleChanges}
          />
        </label>
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
