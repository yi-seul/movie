import styled from "styled-components";
import HomeBanner from "./components/Banner/Banner";
import MovieList from "./components/MovieList/MovieList";

function HomePage() {
    return (
        <S.Wrapper>
            <HomeBanner />
            <MovieList />
        </S.Wrapper>
    );
}
export default HomePage;

const Wrapper = styled.div``;

const S = {
    Wrapper,
};
