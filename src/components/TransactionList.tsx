import React, { useContext } from 'react'
import { GlobalContext } from '../API/Globals';
import TransactionEntry from './TransactionEntry';

const TransactionList: React.FC = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <TransactionEntry key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    );
}

export default TransactionList
