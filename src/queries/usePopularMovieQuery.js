// 무한스크롤링
// react-query에는 인피니트 스크롤을 쉽게 적용할 수 있도록 page값으로 1이 주어졌을 때, 다음 호출에는 페이지 2, 3, ... 자동으로 불러오는 기능이 있음

import { useInfiniteQuery } from "@tanstack/react-query";
import queryKey from "../conts/queryKey";
import MovieApi from "../apis/movieApi";

const usePopularMovieQuery = () => {
    const { data, fetchNextPage, isFetching } = useInfiniteQuery(
        // query key
        [queryKey.POPULAR_MOVIE_LIST],

        // 콜백함수 (pageParam이라는 매개변수를 받고, 값을 1이라고 설정)
        ({ pageParam = 1 }) => MovieApi.getPopularMovies({ params: { page: pageParam } }),
        {
            // 옵션(다음 요청 시, 마지막 페이지 + 1) 작성
            getNextPageParam: (lastPage) => {
                return lastPage.data.page + 1;
            },
            onError: (err) => {
                console.error(err);
            },
        }
    );
    return { data, fetchNextPage, isFetching };
};
export default usePopularMovieQuery;

/*
    현재 fetching 중이라면 또 fectching 되지 않도록 isFetching 사용. (꼭 사용하지 않아도 됨)
    컴퓨터가 느린 사람이라면 마지막 요소를 만났을 때 바로 fetch되지않아서 계속 마지막 요소를 만나고 있음.
    이때, isFetcing을 사용하면 마지막 요소를 만나는 동안 계속 fetch되지않음.
*/
