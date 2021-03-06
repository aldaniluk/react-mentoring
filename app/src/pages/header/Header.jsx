import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo, ColoredButton } from '@globalComponents';
import { AddMovieButton } from '@pages/header/components/AddMovieButton';
import { AddMovieForm } from '@pages/header/components/AddMovieForm';
import { SearchPanelComponent } from '@pages/header/components/layouts/SearchPanelComponent';
import { SearchText } from '@pages/header/components/SearchText';
import { SearchInput } from '@pages/header/components/SearchInput';
import React from 'react'

class Header extends React.Component {
    state = {
        addMovieFormOpened: false
    }

    openCloseAddMovieForm = () => {
        this.setState((state, props) => {
            return {
                addMovieFormOpened: !state.addMovieFormOpened
            }
        });
    }

    render() {
        return (
            <>
                <AddMovieForm opened={this.state.addMovieFormOpened} close={this.openCloseAddMovieForm} />
                <HeaderComponent>
                    <TopPanelComponent>
                        <Logo />
                        <AddMovieButton openAddMovieForm={this.openCloseAddMovieForm} />
                    </TopPanelComponent>
                    <SearchPanelComponent>
                        <SearchText />
                        <SearchInput />
                        <ColoredButton>SEARCH</ColoredButton>
                    </SearchPanelComponent>
                </HeaderComponent>
            </>
        )
    }
}

export { Header }