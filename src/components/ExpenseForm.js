import React, { useState, useEffect} from 'react'

function ExpenseForm({user1, user2}) {
    const [transactions, setTransactions] = useState([]);
    const [transaction, setTransaction] = useState([]);
    const [userTransactions,setUserTransactions] = useState({});

    const handleForm= (e) => {
        // const { name, value } = e.target;
        setTransaction({ ...transaction, [e.target.name]: e.target.value })
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/transaction`, {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: { "content-type": "application/json" }
        })
        // alert("Data Added");
      console.log("transaction: ",transaction)
      }

      useEffect(() => 
      {
        fetch('http://localhost:3000/transaction')
        .then(response => response.json())
        .then(data => setTransactions(data));
      }, [])

      useEffect(() => {
        if(transactions !== {})
        {
            console.log(user1)
            console.log(user2)
            console.log("transaction: ",transaction)
            console.log("transactions: ",transactions)

            transactions.filter(t => {
                if(t.uname1 === user1 && t.uname2 === user2)
                    setUserTransactions(t.data)
                else if(t.uname1 === user2 && t.uname2 === user1)
                    setUserTransactions(t.data)
            } )
        }

    }, [transactions, user1, user2])
    

    
      

  return (


    <div>
        <h1>ExpenseForm</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="desc" onChange={handleForm} required placeholder='Description'></input><br></br>
          <input type='number' name="money" onChange={handleForm} required placeholder='Amount' ></input><br></br>
          <input type='text' name="paid" onChange={handleForm} required placeholder='Paid By' ></input><br></br>
          <button>Add Expense</button>

        </form>
    </div>
   
  )
}

export default ExpenseForm