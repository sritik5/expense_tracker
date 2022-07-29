import React from 'react'
import styles from '../css/HomePage.module.css'
import {Link} from 'react-router-dom'


export default function HomePage() {
  // const [isLogin, setIsLogin] = useState(false);

  // let navigate = useNavigate(); 
  // const logoutfunc = (() => {
  //   localStorage.clear()
  //   navigate('/register')
  //   window.location.reload(false);

  // })
  return (
    <div>
      
        
        <div className={styles.line}>
        <div className={styles.heading}><Link className={styles.navText} to = "/">Expense Tracker</Link></div>
          <div className={styles.navele}><Link className={styles.navText} to="/">Home</Link>
          <Link className={styles.navText} to="/logout" >Logout</Link>
          <div className={styles.ProfilePic}>
            <img src='https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></img>
            </div>
            </div>
            </div>
          <div className={styles.sections}>

            <div className={styles.left}>
            <span className={styles.imageleft}><img src='https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></img></span>
              <div className={styles.lefthead}><h1>Welcome,<span>&nbsp;username</span></h1></div>
             
              
              <div className={styles.list}>
                <div className={styles.leftname}>
                <p>friend 1</p>
                </div>

                <div className={styles.rightamt}>
                <p>$500</p>
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <h1>friends name</h1>
            </div>

            </div>
      </div>
     

   

  )
}
