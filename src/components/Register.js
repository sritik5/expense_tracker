import React from 'react'
import img1 from '../components/img1.png'
import img2 from '../components/img2.png'
import { useForm } from 'react-hook-form';
import styles from '../css/Register.module.css'
export default function Form() {

    const { register, handleSubmit, watch, z: { errors } } = useForm()
 onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
      
        <div className={styles.register}>
            <div className={styles.col1}>
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id={styles.form} className={styles.flex} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Enter your username' />
                    <input type="text" {...register("name")} placeholder='Enter your name' />
                    <input type="email" {...register("email")} placeholder='Enter your email' />
                    <input type="password" {...register("password")} placeholder='Enter your password' />
                    <input type="password" {...register("confirmpwd")} placeholder='Confirm your password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Mobile Number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className={styles.btn}>Sign In</button>
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