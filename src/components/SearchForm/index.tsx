import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque uma transação" />
            <button>
                <MagnifyingGlass />
                Buscar
            </button>
        </SearchFormContainer>
    )
}