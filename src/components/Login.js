import React, {useEffect, useState} from "react";
import styles from "../css/Login.module.css";
import bgImg from '../components/registration_photo.png'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";


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
    if(data.uname === loginUser.uname && data.pw === loginUser.password) {
      localStorage.setItem('Username',loginUser.uname);
    }
  })
  user && user.forEach(data => checkCredentials(data))
  if(localStorage.getItem('Username')) {
    navigate('/');
    window.location.reload(false);
  }
  else {
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
          <Link to="/register">New User? Register</Link>
        </div>
        <div className={styles.col2}>
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
