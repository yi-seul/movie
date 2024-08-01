import styled from "styled-components";
import MovieListTitle from "./Title/Title";
import MovieListSidebar from "./Sidebar/Sidebar";
import MovieListContent from "./Content/Content";

function MovieList() {
    /*
        const [movieList, setMovieList] = useState([]);

        // 페이지가 처음 마운트됐을 때(열렸을 때)
        useEffect(() => {
            MovieApi.getPopularMovies({ params: { page: 1, language: "ko-KO" } })
                .then((res) => {
                    setMovieList(res.data.results);
                })
                .catch((err) => {
                    console.error(err);
                });
        }, []);

        위의 로직 대신 아래와 같이 react-query로 로직 작성
    */

    return (
        <>
            <MovieListTitle />
            <S.Container>
                <MovieListSidebar />
                <MovieListContent />
            </S.Container>
        </>
    );
}
export default MovieList;

const Container = styled.div`
    display: flex;
`;

const S = {
    Container,
};
