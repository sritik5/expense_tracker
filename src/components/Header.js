import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Header.module.css'

export default function Header() {
    let navigate = useNavigate(); 
    const logoutfunc = (() => {
        localStorage.clear()
        navigate('/register')
        window.location.reload(false);
    })
    return (
        <div className={styles.line}>
            <div className={styles.heading}>
                <Link className={styles.navText} to="/">Expense Tracker</Link>
            </div>
            <div className={styles.navele}><Link className={styles.navText} to="/">Home</Link>
                <Link className={styles.navText} to="/logout" onClick={logoutfunc}>Logout</Link>
                <div className={styles.ProfilePic}>
                    <img src='https://images.unsplash.com/photo-1585670210693-e7fdd16b142e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></img>
                </div>
            </div>
        </div>
    )
}
