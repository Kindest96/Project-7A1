import React, { createContext, useReducer, ReactNode } from 'react';
import AppReducer from './AppReducer';
import { State, Transaction } from './Types';

const initialState: State = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ],
}

interface IProps {
    children: ReactNode;
}

// interface ValueProps {
//     transaction: Transaction[];
//     deleteTransaction: (id: number) => void;
//     addTransaction: (transaction: Transaction) => void;
// }

export const GlobalContext = createContext<State>(initialState);

export const GlobalProvider = ({ children }: IProps) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = (id: Transaction['id']) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    const addTransaction = (transaction: Transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}