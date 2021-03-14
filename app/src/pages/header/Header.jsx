import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo, ColoredButton } from '@globalComponents';
import { AddMovieForm } from '@pages/header/components/AddMovieForm';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import { GlobalWidthComponent, SemitransparentButton } from '@globalComponents';
import { MovieDetails } from '@pages/header/movieDetails';
import { ReturnToSearchPanel } from '@pages/header/components/ReturnToSearchPanel';
import { useState } from 'react';

function Header(props) {
    const [addMovieFormOpened, setAddMovieFormOpened] = useState(false);

    return (
        <>
            {addMovieFormOpened && (<AddMovieForm close={() => setAddMovieFormOpened(false)} />)}
            <HeaderComponent>
                <GlobalWidthComponent>
                    <TopPanelComponent>
                        <Logo />
                        {!props.movieId && (
                            <SemitransparentButton onClick={() => setAddMovieFormOpened(true)}>+ ADD MOVIE</SemitransparentButton>
                        )}
                        {props.movieId && (
                            <ReturnToSearchPanel onClick={props.showSearchPanel} />
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