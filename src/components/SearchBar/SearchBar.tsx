import { FC } from 'react'
import { Container, SearchInput } from './SearchBar.styles'
import { Icon } from 'components/Icon'

type SearchBarProps = {
    section: 'top' | 'left' | 'items'
}

export const SearchBar: FC<SearchBarProps> = ({ section }) => {
    return (
        <Container>
            <Icon icon={'search'} />
            <SearchInput section={section} type="text" defaultValue={'Search...'} />
        </Container>
    )
}
