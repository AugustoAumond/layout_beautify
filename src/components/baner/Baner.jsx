import styled from "styled-components";

import Button from "../../material/buttons/Buttons";

function Baner(){
    return (
        <ContainerBaner>
            <img src="/baner_beatify.png" alt="" />

            <div id="absolute">
                <section>
                    <h3>SEUS CABELOS MERECEM UM TRATAMENTO PERFEITO E MAJESTOSO</h3>

                    <Button text={'Saiba Mais'}/>
                </section>
            </div>  
        </ContainerBaner>
    )
}
export default Baner;

const ContainerBaner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
        position: relative;
        width: 100%;
        max-width: 1440px;
    }

    #absolute {
        position: absolute;
        width: 100%;
    }

        section {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 53%;
            max-width: 648px;
            margin: 0 auto;
        }

            h3 {
                position: relative;
                color: white;
                font-weight: 600;
                font-size: 27px;
                line-height: 34px;
            }

            #button {
                position: relative;
                width: 182px;
                transition: 0.5s;
            }

            #button:hover {
                background: #84C5BF;
            }
    @media (max-width: 900px){
        h3 {
            font-size: 16px;
        }

        #button {
            width: 85px;
            font-size: 10px;
            height: 25px;
        }
    }
`