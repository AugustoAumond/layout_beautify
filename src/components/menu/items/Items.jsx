import styled from "styled-components";

function Items(){
    //trabalharia com rotas internas no menu;

    return (
        <UlItems>
            <li id="home">Home</li>

            <li>Quem somos</li>

            <li>Nossos  serviços</li>

            <li>Entre em contato</li>
        </UlItems>
    )
}
export default Items

const UlItems = styled.ul`
    display: flex;
    align-items: center;  
    justify-content: center; 
    height: 100%;

        #home {
            margin-left: 5px;
            color: #84C5BF;
        }
    
        li {
            font-family: 'Montserrat Alternates';
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            color: #0D2239;
            list-style: none;
            margin-left: 5px;
            cursor: pointer;
            transition: 0.5s;
            text-align: center;
        }

        li:hover {
            font-size: 24px
        }

    @media (max-width: 900px){
        li {
            font-size: 14px;
        }

        li: hover {
            font-size: 18px;
        }
    }

`