export type Action =
    | { type: 'DELETE_TRANSACTION'; payload: number }
    | { type: 'ADD_TRANSACTION'; payload: Transaction };

export interface Transaction {
    id: number;
    text: string;
    amount: number;
};

export type State =
    { transactions: Transaction[]; deleteTransaction?: (id: number) => void; addTransaction?: (transaction: Transaction) => void; }