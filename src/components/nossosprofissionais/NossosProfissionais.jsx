import styled from "styled-components";

import Professionals from "./Professionals/Profissionals";

function NossosProfissionais(){

    return (
        <DivProfissionais>
            <title>
                <h3>Conheça Nossos </h3>

                <h2>PROFISSIONAIS</h2>
            </title>

            <Professionals/>
        </DivProfissionais>
    )
}
export default NossosProfissionais;

const DivProfissionais = styled.div`
    position: relative;
    top: 100px;
    max-width: 1420px;
    width: 100%;
    margin: 0 auto;

    title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }

        h3 {
            font-weight: 800;
            font-size: 24px;
            line-height: 29px;
            color: #016D77;
        }

        h2 {
            font-weight: 900;
            font-size: 32px;
            line-height: 39px;
            color: #E29579;
            margin-top: -20px;
        }

    @media (max-width: 550px){
        h3 {
            font-size: 20px;
        }

        h2{
            font-size: 28px;
        }
    }
`