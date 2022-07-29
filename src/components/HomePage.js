import React, { useEffect, useState } from 'react'
import styles from '../css/HomePage.module.css'
import DisplayUser from './DisplayUser';

export default function HomePage() {

    const [users, setUsers] = useState([]);
    const [loggegInUser, setLoggegInUser] = useState("ritik");
    
    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            console.log(data)
        })
      }, [])
      console.log(users);
    
  return (
    <div>
        <h1>
            {
                users && users.map(u=>{
                    // <DisplayUser key={u.id} user={u}/>
                    if(loggegInUser!=u.uname)
                        return <p onClick={()=>{
                            <DisplayUser user={u}/>
                        }} key={u.id} >{u.uname}</p>
                    
    })
            }
        </h1>
    </div>
  )
}
