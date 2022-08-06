import React, { useEffect, useState } from 'react'
import styles from '../css/Expenses.module.css'
import ExpenseForm from './ExpenseForm';

export default function Expenses({user1, user2}) {

    const [transactions, setTransactions] = useState();
    const [userTransactions, setUserTransactions] = useState();
    const [displayForm, setDisplayForm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/transaction')
          .then(res => res.json())
          .then(data => {
            setTransactions(data)
            // console.log(data)
        })
    }, [])

    useEffect(() => {
        if(transactions)
        {
            console.log(user1)
            console.log(user2)

            transactions.filter(t => {
                if(t.uname1 === user1 && t.uname2 === user2)
                    setUserTransactions(t.data)
                else if(t.uname1 === user2 && t.uname2 === user1)
                    setUserTransactions(t.data)
            } )
        }
        
    }, [transactions, user1, user2])
    
    // if(userTransactions)
    // {
    //     console.log("user transactions",userTransactions)
    //     console.log("user transactions 1",userTransactions[0])   
    // }

    return (

        <div>
            <h1 className={styles.righthead}><span>Your expense with</span>{user2}</h1>
            {
                userTransactions &&
                userTransactions.map((t,index) => <h3  className={styles.rightlist} key={index}><span>{t.desc}: </span> ${t.money} paid by {t.paid}</h3>)
            }
            <div>
                <button onClick={()=>setDisplayForm(true)}>Add Expense</button>
                {
                    displayForm &&
                    <ExpenseForm user1={user1} user2={user2} />
                }

            </div>
        </div>
  )
}
