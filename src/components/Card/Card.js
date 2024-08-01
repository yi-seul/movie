import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReplaceImage from "../../assets/images/unknown.png";
import { flexCenter } from "../../styles/common";
import { theme } from "../../styles/theme";

function MovieCard({ movie }) {
    // console.log(movie);
    const IMAGE_URL = useRef(process.env.REACT_APP_IMAGE_URL);
    const [movieOverview, setMovieOverview] = useState("");

    // movie의 overview가 50글자가 넘으면 100글자 이후는 ...으로 보이도록
    useEffect(() => {
        if (!movie) return;
        // console.log(movie.overview.length)
        if (movie.overview.length > 100) {
            setMovieOverview(movie.overview.slice(0, 100) + "...");
        } else {
            setMovieOverview(movieOverview);
        }
    }, [movie]);

    return (
        <S.Wrapper>
            <S.Poster>
                <img src={movie.poster_path ? IMAGE_URL.current + movie.poster_path : ReplaceImage} />
            </S.Poster>
            <S.DescBox>
                <h1>{movie.title}</h1>
                <div>{movie.vote_average}</div>
                <p>{movieOverview}</p>
            </S.DescBox>
        </S.Wrapper>
    );
}
export default MovieCard;

const Wrapper = styled.div`
    width: 340px;
    height: 610px;
    margin: 8px;
    overflow: hidden;
`;
const Poster = styled.div`
    ${flexCenter}
    & img {
        width: 260px;
        aspect-ratio: 9 / 16;
    }
`;
const DescBox = styled.div`
    width: 260px;
    margin: 0 auto;

    & h1 {
        padding: 10px 0 5px;
        color: #fff;
        font-size: ${({ theme }) => theme.fontSize.xLarge};
    }

    & div {
        color: #ff0;
    }

    & p {
        color: #999;
    }
`;

const S = {
    Wrapper,
    Poster,
    DescBox,
};
