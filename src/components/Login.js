import React, {useEffect, useState} from "react";
import styles from "../css/Login.module.css";
import bgImg from '../components/registration_photo.png'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";



export default function Login() {
const [user , setUser] = useState([]);
const [loginUser,setLoginUser] = useState([]);



const { register,watch, formState: { errors } } = useForm()

let navigate = useNavigate()
useEffect(()=>{
  fetch(`http://localhost:3000/users`)
  .then (res=>res.json())
  .then (data=>{
    setUser(data)
    console.log(data)
  })
}, []);

const handleForm= ((e) => {
  console.log("value: ",e.target.value);
  console.log("name: ",e.target.name);
  
  setLoginUser({
    ...loginUser,
    [e.target.name]: e.target.value
  });
})


const handleSubmit = (e) =>{
user.forEach(ele=>{
  console.log("ele.uname",ele.uname)
  console.log("loginUser.uname",loginUser.uname)
  console.log(register.username)

   if(ele.uname===loginUser.uname && ele.pw===loginUser.pw){
    e.preventDefault()
    localStorage.setItem('Username',loginUser.uname)
    // toggleAuth(true);
    // console.log(isAuth)
    console.log(ele);
    alert("Log in Successful",ele.pw);
    
    // navigate('/');
   }
   else{
    alert("credentials didnt match")
    navigate('/login')
   }
})
}







  
  return (
    <section>
      <div className={styles.register}>
        <div className={styles.col-1}>
          <h2>Login</h2>
          {/* <span>register and enjoy the service</span> */}

          <form id={styles.form} className={styles.flex}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              required
              onChange={handleForm}
              name="uname"
              {...register("username")}
              placeholder="username"
            />

            <input
              type="password"
              required
              name="pw"
              onChange={handleForm}
              // onChange={handleForm}
              {...register("password")}
              placeholder="password"
            />


            <button className={styles.btn}> Login</button>
          </form>
        </div>
       <div className={styles.col-2}>
       <img src={bgImg} alt="" />
       </div>
          
        
      </div>
    </section>
  );
  }
