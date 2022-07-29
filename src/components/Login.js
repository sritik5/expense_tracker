import React, {useState} from "react";
import styles from "../css/Login.module.css";
import bgImg from '../components/registration_photo.png'
import { useForm } from 'react-hook-form';


export default function Login() {

  const [user , setUser] = React.useState([]);
  const [loginUser,setLoginUser] = React.useState({});

  useEffect(()=>{
    fetch(`http://localhost:3000/users`)
    .then (res=>res.json())
    .then (res=>setUser(res))
}, []);

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  return (
    <section>
      <div className={styles.register}>
        <div className={styles.col-1}>
          <h2>Login</h2>
          {/* <span>register and enjoy the service</span> */}

          <form id={styles.form} className={styles.flex}
            
           
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />

            <input
              type="password"
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
