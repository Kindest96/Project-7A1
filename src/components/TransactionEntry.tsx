import React, { useContext } from 'react'
import { GlobalContext } from '../API/Globals';
import { Transaction } from '../API/Types';

interface IProps {
    transaction: Transaction
}

const TransactionEntry = ({transaction}: IProps) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign: '-' | '+' = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction? deleteTransaction(transaction.id) : null} className="delete-btn">x</button>
        </li>
    )
}

export default TransactionEntry
