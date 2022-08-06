import React, { useEffect, useState } from 'react'
import styles from '../css/HomePage.module.css'
import { Link } from 'react-router-dom'
import DisplayUser from './DisplayUser';
import Header from './Header';


export default function HomePage() {

  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("ritik");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('Username'));
  }, [users])
  
  
  return (
    <div>
      <Header/>

      <div className={styles.sections}>
        <div className={styles.left}>
          <span className={styles.imageleft}><img src='https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></img></span>
          <div className={styles.lefthead}>
            <h1>Welcome,<span>&nbsp;{loggedInUser}</span></h1>
          </div>
          {
            users && users.map(u=>{
              // <DisplayUser key={u.id} user={u}/>
              if(loggedInUser !== u.uname)
                return (
                  <div className={styles.list} key={u.id}>

                    <div className={styles.leftname}>
                      <p onClick={()=>console.log(u.uname)}>{u.uname}</p>
                    </div>
                    <div className={styles.rightamt}>
                      <p>$500</p>
                    </div>
                  </div>
                )
                // <p onClick={()=>{
                //     <DisplayUser user={u}/>
                // }} key={u.id} >{u.uname}</p>

            })
          }
              
        </div>

        <div className={styles.right}>
          <h1>friends name</h1>
        </div>

      </div>
    </div>

  )

}

