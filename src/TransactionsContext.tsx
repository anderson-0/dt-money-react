import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface ITransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([]);

export function TransactionsProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));        
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            { children }
        </TransactionsContext.Provider>
    );
}