import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo, ColoredButton } from '@globalComponents';
import { AddMovieForm } from '@pages/header/components/AddMovieForm';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import { GlobalWidthComponent, SemitransparentButton } from '@globalComponents';
import { MovieDetails } from '@pages/header/movieDetails/MovieDetails';
import { ReturnToSearchPanel } from '@pages/header/components/ReturnToSearchPanel';
import React from 'react'

class Header extends React.Component {
    state = {
        addMovieFormOpened: false
    }

    openCloseAddMovieForm = () => {
        this.setState((state) => ({
            addMovieFormOpened: !state.addMovieFormOpened
        }))
    }

    render() {
        return (
            <>
                {this.state.addMovieFormOpened && (<AddMovieForm close={this.openCloseAddMovieForm} />)}
                <HeaderComponent>
                    <GlobalWidthComponent>
                        <TopPanelComponent>
                            <Logo />
                            {this.props.searchPanelShown && (
                                <SemitransparentButton onClick={this.openCloseAddMovieForm}>+ ADD MOVIE</SemitransparentButton>
                            )}
                            {this.props.movieId && (
                                <ReturnToSearchPanel onClick={this.props.showSearchPanel} />
                            )}
                        </TopPanelComponent>
                        {this.props.searchPanelShown && (
                            <SearchPanelComponent>
                                <SearchText />
                                <SearchInput />
                                <ColoredButton>SEARCH</ColoredButton>
                            </SearchPanelComponent>
                        )}
                        {this.props.movieId && (
                            <MovieDetails id={this.props.movieId} />
                        )}
                    </GlobalWidthComponent>
                </HeaderComponent>
            </>
        )
    }
}

export { Header }