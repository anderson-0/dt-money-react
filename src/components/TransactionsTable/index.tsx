import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ITransaction {
    id: string;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));        
    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data Transação</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td className="title">{transaction.title}</td>
                                <td className={transaction.type}>R${transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    );
}