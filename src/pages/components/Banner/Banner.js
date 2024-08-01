import styled from "styled-components";
import MainImages from "../../../assets/images/flix-main.jpg";

function HomeBanner() {
    return (
        <S.Wrapper>
            <img src={MainImages} alt="main" />
            <div></div>
            <S.Text>
                LET'S WATCH MOVIE
                <br />
                <span>TOGETHER</span>
            </S.Text>
        </S.Wrapper>
    );
}
export default HomeBanner;

const Wrapper = styled.div`
    position: relative;

    & > img {
        width: 100%;
        height: calc(100vh - 150px);
        object-fit: cover;
    }

    & > div {
        width: 100%;
        height: calc(100vh - 150px);
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const Text = styled.p`
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    color: #feb23f;

    & span {
        color: #fff;
    }
`;

const S = {
    Wrapper,
    Text,
};
