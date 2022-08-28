import styled from "styled-components";

import Services from "./services/Services";

function About(){

    return (
        <SectionAbout>
            <Div>
                <DivAbout>
                    <h1>Sobre</h1>
                    <h2>Beautify Queen</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    </p>
                </DivAbout>

                <img src="./services_photo.png" alt="" />
            </Div>

            <Services/>

        </SectionAbout>
    )
}
export default About;

const SectionAbout = styled.div`
    position: relative;
    max-width: 1420px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

    const Div = styled.div`
    display: flex;
    margin-left: 216px;
    justify-content: space-between;

        img {
            margin-left: 10px;
            width: 50%;
            max-width: 616px;
            max-height: 295px;
        }

        @media (max-width: 1100px){
            margin-left: 30px;
        }

        @media (max-width: 900px){
            flex-direction: column;

            img {
                margin: 0 auto;
                position: relative;
                top: 50px;
            }
        }
    `

        const DivAbout = styled.div`
            position: relative;
            top: 45px;
            display: flex;
            flex-direction: column;

            h1 {
                margin: 0px;
                height: 35px;
                color: #016D77;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 800;
                font-size: 28px;
                line-height: 34px;
            }

            h2 {
                margin-top: 0px;
                color: #E29579;
                font-family: 'Austein';
                font-style: normal;
                font-weight: 400;
                font-size: 44px;
                line-height: 46px;
            }

            p {
                color: #000000;
                margin-top: -25px;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
            }
        `