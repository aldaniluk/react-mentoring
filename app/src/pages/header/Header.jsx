import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo, ColoredButton } from '@globalComponents';
import AddMovieForm from '@pages/header/components/AddMovieForm';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import { GlobalWidthComponent, SemitransparentButton } from '@globalComponents';
import { MovieDetails } from '@pages/header/movieDetails';
import { ReturnToSearchPanel } from '@pages/header/components/ReturnToSearchPanel';
import { useState, useCallback } from 'react';

function Header(props) {
    const [addMovieFormOpened, setAddMovieFormOpened] = useState(false);

    const showSearchPanel = useCallback(() => props.showSearchPanel(null), [props.showSearchPanel]);
    const handleAddMovieForm = useCallback(() => setAddMovieFormOpened(flag => !flag), []);

    return (
        <>
            {addMovieFormOpened && (<AddMovieForm close={handleAddMovieForm} />)}
            <HeaderComponent>
                <GlobalWidthComponent>
                    <TopPanelComponent>
                        <Logo />
                        {!props.movieId && (
                            <SemitransparentButton onClick={handleAddMovieForm}>+ ADD MOVIE</SemitransparentButton>
                        )}
                        {props.movieId && (
                            <ReturnToSearchPanel onClick={showSearchPanel} />
                        )}
                    </TopPanelComponent>
                    {!props.movieId && (
                        <SearchPanelComponent>
                            <SearchText />
                            <SearchInput />
                            <ColoredButton>SEARCH</ColoredButton>
                        </SearchPanelComponent>
                    )}
                    {props.movieId && (
                        <MovieDetails id={props.movieId} />
                    )}
                </GlobalWidthComponent>
            </HeaderComponent>
        </>
    )
}

export { Header }