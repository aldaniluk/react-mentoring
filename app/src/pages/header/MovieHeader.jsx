import { HeaderComponent } from '@pages/header/components/layouts/HeaderComponent';
import { TopPanelComponent } from '@pages/header/components/layouts/TopPanelComponent';
import { Logo } from '@globalComponents';
import { GlobalWidthComponent, SemitransparentButton } from '@globalComponents';
import { MovieDetails } from '@pages/header/movieDetails';
import { ReturnToSearchPanel } from '@pages/header/components/ReturnToSearchPanel';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function MovieHeader(props) {
    let { movieId } = useParams();

    return (
        <HeaderComponent>
            <GlobalWidthComponent>
                <TopPanelComponent>
                    <Logo />
                    <NavLink to='/'>
                        <ReturnToSearchPanel />
                    </NavLink>
                </TopPanelComponent>
                <MovieDetails id={movieId} />
            </GlobalWidthComponent>
        </HeaderComponent>
    )
}

export { MovieHeader }