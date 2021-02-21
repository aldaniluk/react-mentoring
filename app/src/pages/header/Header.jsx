import React from 'react';
import { HeaderComponent } from './components/layouts/HeaderComponent';
import { TopPanelComponent } from './components/layouts/TopPanelComponent';
import { Logo } from '../components/Logo';
import { AddMovieButton } from './components/AddMovieButton';
import { SearchPanelComponent } from './components/layouts/SearchPanelComponent';
import { SearchText } from './components/SearchText';
import { SearchInput } from './components/SearchInput';
import { SearchButton } from './components/SearchButton';

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