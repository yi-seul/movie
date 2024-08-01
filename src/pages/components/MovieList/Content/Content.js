import styled from "styled-components";
import MovieCard from "../../../../components/Card/Card";
import usePopularMovieQuery from "../../../../queries/usePopularMovieQuery";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function MovieListContent() {
    const { data: movieList, fetchNextPage, isFetching } = usePopularMovieQuery();
    // console.log(movieList); -> undefined 출력된 후 출력됨

    // 사용자가 마지막 요소를 감지할때마다, (마지막 페이지 +1을 한 후) 요청을 다시 refetch
    /*
        마지막 요소 감지하는 방법
            1. react-query에서 지원하는 라이브러리인 react intersection observer 사용
                사용자가 보는 화면에 이 요소가 들어오면 true,false
            2. 라이브러리를 사용하지않고 observer를 직접 개발?사용?
    */
    // ref = useRef의 역할 (html 요소 선택), inView = 감지됨에 따라 변화되는 옵션 값
    const [ref, inView] = useInView();

    useEffect(() => {
        // console.log(inView); -> 처음에는 false 출력, <div ref={ref}></div>를 만나면 true 출력
        if (!inView || isFetching) return;
        fetchNextPage();
    }, [inView]);

    /*
        react-query를 사용하지 않고 무한 스크롤링을 만든다면?

            const [page, setPage] = useState(1);

            useEffect(() => {
                if(!inView) return;
                setPage((prev) => prev + 1)    
            })
            // react-query를 사용하면 위의 useEffect를 자동으로 처리해줌 (다음 페이지를 만나면 + 1을 자동으로 해줌)
            // useInfiniteQuery 함수를 사용하고, 이 함수에서 요청에서 fetchNextPage를 사용하면 자동으로 마지막 페이지 + 1

            useEffect(() => {
                MovieApi.getPopularMovieList({param: { page }}).then((res) => concat)
            },[page])
    */

    return (
        <S.Wrapper>
            <S.Container>
                {/* 처음에는 undefined이기 때문에 moviList가 있어야 map을 돌린다는 로직이 필요하므로 && 사용 */}
                {movieList &&
                    // movieList의 pages안에 영화 페이지 데이터가 있으므로 movieList의 pages를 map 돌림 (0번째 페이지가 매개변수 page로 들어감)
                    movieList.pages.map((page, index) => (
                        // <></> = <React.Fragment>/<React.Fragment>, key값을 주기 위해 빈 프래그먼트가 아닌 React.Fragment를 사용
                        <React.Fragment key={index}>
                            {/* page(0번째 페이지)의 data안의 results에 영화 목록 데이터가 있음 */}
                            {page.data.results.map((movie, index) => (
                                <MovieCard movie={movie} key={index} />
                            ))}
                        </React.Fragment>
                    ))}
                <div ref={ref}></div>
            </S.Container>
            {/* => 일단 영화 페이지에 대해 map을 돌리고, 그 페이지 안의 영화 목록에 대해 map을 돌린 것 */}
        </S.Wrapper>
    );
}
export default MovieListContent;

const Wrapper = styled.div`
    width: calc(100% - 340px);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 0 64px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const S = {
    Wrapper,
    Container,
};
