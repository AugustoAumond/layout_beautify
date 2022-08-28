import styled from "styled-components";

function Video (){

    return (
        <DivVideo>
            <container>
                <img src="./video.png" alt="" />

                <h1>CAIXA VIDEO <strong>YOUTUBE</strong></h1>
            </container>
        </DivVideo>
    )
}
export default Video;

const DivVideo = styled.div `
    position: relative;
    top: 170px;
    display: flex;
    justify-content: center;

    container {
        max-width: 600px;
        max-height: 357px;
    }

        img {
            position: relative;
            width: 100%;
            height: 100%;
        }

        h1 {
            position: relative;
            bottom: 250px;
            left: 67px;
            width: 350px;
            font-weight: 800;
            font-size: 24px;
            line-height: 29px;
            color: #0D2239;
            z-index: 2;
        }

            strong {
                font-size: 34px;
            }
`