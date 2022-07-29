import React, { useEffect, useState } from 'react'
import styles from '../css/HomePage.module.css'
import DisplayUser from './DisplayUser';

export default function HomePage() {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            console.log(data)
        })
      }, [])
    
  return (
    <div>
        <h1>
            {
                users && users.map(u=><DisplayUser key={u.id} user={u}/>)
            }
        </h1>
    </div>
  )
}
