import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo, ColoredButton } from '@globalComponents';
import { AddMovieForm } from '@pages/header/components/AddMovieForm';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import { GlobalWidthComponent, SemitransparentButton } from '@globalComponents';
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
                            <SemitransparentButton onClick={this.openCloseAddMovieForm}>+ ADD MOVIE</SemitransparentButton>
                        </TopPanelComponent>
                        <SearchPanelComponent>
                            <SearchText />
                            <SearchInput />
                            <ColoredButton>SEARCH</ColoredButton>
                        </SearchPanelComponent>
                    </GlobalWidthComponent>
                </HeaderComponent>
            </>
        )
    }
}

export { Header }