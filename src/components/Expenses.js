import React, { useEffect, useState } from 'react'

export default function Expenses({user1, user2}) {

    const [transactions, setTransactions] = useState();
    const [userTransactions, setUserTransactions] = useState();

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
            transactions.filter(t => {
                if(t.uname1 === user1 || t.uname2 === user2)
                    setUserTransactions(t.data)
                else if(t.uname1 === user2 || t.uname2 === user1)
                    setUserTransactions(t.data)
            } )
    }, [transactions])
    
    // if(userTransactions)
    // {
    //     console.log("user transactions",userTransactions)
    //     console.log("user transactions 1",userTransactions[0])   
    // }

    return (
        <div>
            <h1>{user2}</h1>
            {
                userTransactions &&
                userTransactions.map((t,index) => <h3 key={index}>{t.desc} {t.money} {t.paid}</h3>)
            }
        </div>
  )
}
