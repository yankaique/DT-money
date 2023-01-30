import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver} from '@hookform/resolvers/zod';
import { SearchFormContainer } from "./styles";
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const searchFormSchema = z.object({
    query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
    const { fetchTransactions } = useContext(TransactionsContext)
    const {
        register, 
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchTransaction(data: SearchFormInputs) {
        await  fetchTransactions(data.query)
    };

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
            <input 
                type="text" 
                placeholder="Busque uma transação" 
                {...register('query')}
            />
            <button disabled={isSubmitting}>
                <MagnifyingGlass />
                Buscar
            </button>
        </SearchFormContainer>
    )
}