import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='50%'>Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">
                                    R$ 1.200,00
                                </PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>15/03/2022</td>
                        </tr>

                        <tr>
                            <td width='50%'>Hambirguer</td>
                            <td>
                                <PriceHighLight variant="outcome">
                                    - R$ 1.200,00
                                </PriceHighLight>
                            </td>
                            <td>Alimentação</td>
                            <td>15/03/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}