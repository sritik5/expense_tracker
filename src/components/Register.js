import React from 'react'
import bgImg from '../components/registration_photo.png'
import { useForm } from 'react-hook-form';
import styles from '../css/Register.module.css'
export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className={styles.register}>
            <div className={styles.col-1}>
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id={styles.form} className={styles.flex} onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("name")} placeholder='name' />
                    <input type="email" {...register("email")} placeholder='email' />
                    <input type="password" {...register("password")} placeholder='password' />
                    <input type="password" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className={styles.btn}>Sign In</button>
                </form>

            </div>
            <div className={styles.col-2}>
                <img src={bgImg} alt="" /> 
            </div>
        </div>
    </section>
  )
}