import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo, ColoredButton } from '@globalComponents';
import AddMovieForm from '@pages/header/components/AddMovieForm.Connect';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import { GlobalWidthComponent, SemitransparentButton } from '@globalComponents';
import { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    const [addMovieFormOpened, setAddMovieFormOpened] = useState(false);
    const [search, setSearch] = useState(null);

    const handleAddMovieForm = useCallback(() => setAddMovieFormOpened(flag => !flag), []);

    return (
        <>
            {addMovieFormOpened && (<AddMovieForm close={handleAddMovieForm} />)}
            <HeaderComponent>
                <GlobalWidthComponent>
                    <TopPanelComponent>
                        <Logo />
                        <SemitransparentButton onClick={handleAddMovieForm}>+ ADD MOVIE</SemitransparentButton>
                    </TopPanelComponent>
                    <SearchPanelComponent>
                        <SearchText />
                        <SearchInput placeholder='What do you want to watch?' onChange={event => setSearch(event.target.value)} />
                        <Link to={search ? `/film?search=${search}` : '/'}>
                            <ColoredButton>SEARCH</ColoredButton>
                        </Link>
                    </SearchPanelComponent>
                </GlobalWidthComponent>
            </HeaderComponent>
        </>
    )
}

export { Header }