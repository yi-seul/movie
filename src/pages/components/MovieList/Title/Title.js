import styled from "styled-components";
import { flexAlignCenter } from "../../../../styles/common";

function MovieListTitle() {
    return (
        <S.Wrapper>
            MOVIES LIST
            <hr />
        </S.Wrapper>
    );
}
export default MovieListTitle;

const Wrapper = styled.div`
    ${flexAlignCenter}
    width: 80%;
    margin: 48px 0;
    flex: 1;
    color: #fff;
    font-size: 32px;
    margin-left: 64px;

    & hr {
        flex: 0 0 100%;
        margin-left: 32px;
        background-color: #f00;
        border: none;
        height: 3px;
    }
`;

const S = {
    Wrapper,
};
