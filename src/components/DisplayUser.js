import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../css/DisplayUser.module.css'

export default function DisplayUser({user}) {

    return (
        <div>
            {
                <button className={styles.userButton} onClick={()=>console.log(user)}>{user.uname}</button>
            }
        </div>
  )
}
