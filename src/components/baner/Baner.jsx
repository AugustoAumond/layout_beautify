import styled from "styled-components";

import Button from "../../material/buttons/Buttons";

function Baner(){
    return (
        <ContainerBaner>
            <img src="/baner_beatify.png" alt="" />

            <div id="absolute">
                <section>
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

            #button {
                position: relative;
                top: 30px;
                width: 182px;
                transition: 0.5s;
            }

            #button:hover {
                background: #84C5BF;
            }

    @media (max-width: 900px){
        #button {
            width: 85px;
            font-size: 10px;
            height: 25px;
        }
    }

    @media (max-width: 550px){
        #button{
            top: 15px;
            width: 65px;
            font-size: 8px;
            height: 20px;
        }
    }
`