import React, { useContext } from 'react'
import { GlobalContext } from '../API/Globals';
import { Transaction } from '../API/Types';

const Balance: React.FC = () => {
    const { transactions } = useContext(GlobalContext);

    const amount: Transaction['amount'][] = transactions.map(transaction => transaction.amount);
    const total: number = +amount.reduce((acc: number, num: number) => (acc += num), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
