import React, {useEffect, useState} from "react";
import styles from "../css/Login.module.css";
import bgImg from '../components/registration_photo.png'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Loginsvg } from '../components/login.svg';


export default function Login() {
const [user, setUser] = useState([]);
const [loginUser,setLoginUser] = useState([]);

const { register,watch, formState: { errors } } = useForm()

let navigate = useNavigate();

useEffect(() => {
  fetch(`http://localhost:3000/users`)
  .then (res=>res.json())
  .then (data=>setUser(data))
}, []);

const handleForm= ((e) => {
  // console.log("value: ",e.target.value);
  // console.log("name: ",e.target.name);
  
  setLoginUser({
    ...loginUser,
    [e.target.name]: e.target.value
  });
})


const  handleSubmit = ((e) => {
  e.preventDefault();
  const checkCredentials =(data => {
    console.log("data pw: ",data.pw)
    console.log("login user pw: ",loginUser.pw)
    if(data.uname === loginUser.uname && data.pw === loginUser.pw)
      localStorage.setItem('Username',loginUser.uname);
  })
  user && user.forEach(data => checkCredentials(data))
  if(localStorage.getItem('Username')) {

    navigate('/');
    window.location.reload(false);
  }
  else {
    console.log("login user uname:",loginUser.uname)
    alert("Invalid Credentials");
  }
})
  
  return (
    <section>
      <div className={styles.register}>
        <div className={styles.col1}>
          <h2>Login</h2>
          {/* <span>register and enjoy the service</span> */}

          <form id={styles.form} className={styles.flex}
            onSubmit={handleSubmit}>

            <input
              type="text"
              required
              onChange={handleForm}
              name="uname"
              // {...register("username")}
              placeholder="username"
            />

            <input
              type="password"
              required
              name="pw"
              onChange={handleForm}
              // onChange={handleForm}
              // {...register("password")}
              placeholder="password"
            />

            <button className={styles.btn}> Login</button>
          </form>
          <Link className={styles.newuserreg} to="/register">New User? <span className={styles.spanreg}>Register</span></Link>
        </div>
        <div className={styles.col2}>
          <h1>Authentication</h1>
          <div className={styles.loginimg}>
          < Loginsvg />
          </div>
                 </div>
      </div>
    </section>
  );
}
