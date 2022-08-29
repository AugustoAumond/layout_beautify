import styled from "styled-components";

function Video (){

    return (
        <DivVideo>
            <container>
                <img src="./video.png" alt="" />
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
`