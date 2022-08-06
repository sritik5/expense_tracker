import React, { useEffect, useState } from 'react'
import styles from '../css/HomePage.module.css'
import { Link } from 'react-router-dom'
import DisplayUser from './DisplayUser';
import Header from './Header';
import Expenses from './Expenses';


export default function HomePage() {

  const [loggedInUser, setLoggedInUser] = useState("ritik");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

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
      <h1 className={styles.headwel}>Welcome to the</h1>
      <span className={styles.spanheadwel}>Expense Tracker</span>

      <div className={styles.sections}>
        <div className={styles.left}>
          <div className={styles.lefthead}>
          <span className={styles.imageleft}><img src='https://images.unsplash.com/photo-1567324216289-97cc4134f626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80 '></img></span>  
            <h1>Welcome,<span>&nbsp;{loggedInUser}</span></h1>
          </div>
          {
            users && users.map(u=>{
              // <DisplayUser key={u.id} user={u}/>
              if(loggedInUser !== u.uname)
                return (
                  <div className={styles.list} key={u.id}>
                    <div className={styles.leftname}>
                      <p onClick={()=>setSelectedUser(u.uname)}>{u.uname}</p>
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
          {
            
            selectedUser && 
            <>
            <div className={styles.rightcont}>
            <p className={styles.rightname}><Expenses user1={loggedInUser} user2={selectedUser}/></p>
            </div>
             <div className={styles.totalexp}>
              <h1>total</h1>

             </div>
             <div className={styles.buttons}>
              <button className={styles.btn1}>Settle Up</button>
              <button className={styles.btn2}>+</button>


             </div>
             </>

          }
        </div>

      </div>
    </div>

  )

}

