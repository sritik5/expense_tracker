import React from 'react'
import styles from '../css/DisplayUser.module.css'

export default function DisplayUser({user}) {

    return (
        <div>
            {user.uname}
        </div>
  )
}
