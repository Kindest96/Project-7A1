import React, { useState, useContext } from 'react'
import { GlobalContext } from '../API/Globals';
import { State, Transaction } from '../API/Types';

const AddTransaction = () => {
    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    const { addTransaction } = useContext<State>(GlobalContext);

    const onSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault();
        const newTransaction: Transaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };

        if (addTransaction)
            addTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                    <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(+e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
