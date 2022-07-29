import React from 'react'
import img1 from '../components/img1.png'
import img2 from '../components/img2.png'
import { useForm } from 'react-hook-form';
import styles from '../css/Register.module.css'
import { useState } from 'react';

export default function Register() {

  const [errorUname, setErrorUname] = useState(true);
  const [user, setUser] = useState([])

    const { register, formState: { errors } } = useForm()

    const handleForm= (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value })

     
  }
  const handleSubmit = () => {
    console.log(user)
    fetch(`http://localhost:3000/users`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" }
    })
    alert("Sign up Successfull");
}


    // console.log(watch('username'));
    
  return (
    <section>
      
        <div className={styles.register}>
            <div className={styles.col1}>
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id={styles.form} className={styles.flex} onSubmit={handleSubmit}>
                    <input type="text" {...register("username")} onChange={handleForm} placeholder='username' required />
                    { !errorUname && <text>'Username should not be same':</text>}
                    <input type="text" {...register("name")} onChange={handleForm} placeholder='name' required/>
                    <input type="email" {...register("email")} onChange={handleForm} placeholder='email' required/>
                    <input type="password" {...register("password")} onChange={handleForm} placeholder='password' required/>
                    <input type="password" {...register("confirmpwd")} onChange={handleForm} placeholder='confirm password' required/>
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} onChange={handleForm} placeholder='mobile number' required />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button type="submit" onSubmit={()=>handleSubmit()} className={styles.btn}>Sign In</button>
                </form>
            </div>
            <div className={styles.col2}>
            <h2 className={styles.head}>TRACK YOUR EXPENSE.</h2>
            <img  src={img1} alt="" />
            </div>
        </div>
    </section>
  )
  }