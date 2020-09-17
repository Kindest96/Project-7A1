import React, { useContext } from 'react'
import { GlobalContext } from '../API/Globals';
import { Transaction } from '../API/Types';

const IncomeExpenses: React.FC = () => {
    const { transactions } = useContext(GlobalContext);
    
    const amount: Transaction['amount'][] = transactions.map(transaction => transaction.amount);

    const income: number = +amount.filter((item: number) => item > 0).reduce((acc: number, item: number) => acc += item, 0).toFixed(2);
    const expense: number = +amount.filter((item: number) => item < 0).reduce((acc: number, item: number) => acc += item, 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <div className="money plus">${income}</div>
            </div>
            <div>
                <h4>Expense</h4>
                <div className="money minus">${expense}</div>
            </div>
        </div>
    )
}

export default IncomeExpenses
