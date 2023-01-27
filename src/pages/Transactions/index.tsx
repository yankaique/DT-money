import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions() {
    const { transactions } = useContext(TransactionsContext)
    return (
        <div>
            <Header />
            <Summary />
            <SearchForm />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width='50%'>{transaction.description}</td>
                                    <td>
                                        <PriceHighLight variant={transaction.type}>
                                            R$ {transaction.price}
                                        </PriceHighLight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}