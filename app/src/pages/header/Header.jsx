import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo } from '@globalComponents';
import { AddMovieButton } from '@pages/header/components/AddMovieButton';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import { SearchButton } from '@pages/header/components/SearchButton';

function Header() {
    return (
        <HeaderComponent>
            <TopPanelComponent>
                <Logo />
                <AddMovieButton />
            </TopPanelComponent>
            <SearchPanelComponent>
                <SearchText />
                <SearchInput />
                <SearchButton />
            </SearchPanelComponent>
        </HeaderComponent>
    )
}

export { Header }