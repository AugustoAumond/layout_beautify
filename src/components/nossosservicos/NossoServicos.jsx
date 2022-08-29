import styled from "styled-components";

import Services from "./services/Services";

function NossosServicos(){
    return (
        <DivNossos>
            <title>
                <h2>Nossos Serviços</h2>

                <h1>Venha Ficar Mais Linda</h1>
            </title>

            <Services/>
        </DivNossos>
    )
}
export default NossosServicos;

const DivNossos = styled.div`
    position: relative;
    top: 75px;
    max-width: 1420px;
    margin: 0 auto;

    title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

        h2 {
            color: #016D77;
            font-weight: 800;
            font-size: 24px;
            line-height: 29px;
        }

        h1 {
            margin-top: -18px;
            color: #E29579;
            font-weight: 900;
            font-size: 32px;
            line-height: 39px;
        }

    @media (max-width: 550px){
        h1 {
            font-size: 24px;
        }

        h2{
            font-size: 20px;
        }
    }
`