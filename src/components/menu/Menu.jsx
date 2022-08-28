import styled from "styled-components";

import Items from "./items/Items";
import Button from "../../material/buttons/Buttons";

function Menu (){
    return(
        <DivMenu>
            <header>
                <img src="./logo_beautify_queen.png" alt="" />

                <Items/>

                <Button id="buttonmenu" text={'Agendamento'}/>
            </header>
        </DivMenu>
    )
}
export default Menu;

const DivMenu = styled.div`
display: flex;
margin: 0 auto;
align-items: center;
background: white;
max-width: 1440px;
height: 145px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-width: 1300px;
        width: 85%;
        margin: 0 auto;
    }

        img {
            max-width: 133px;
        }

        #button{
            width: 264px;
            transition: 0.5s;
        }

        #button:hover {
            background: #84C5BF;
        }
    
    @media (max-width: 900px){

        img {
            max-width: 77px;
        }
        #button {
            width: 115px;
            height: 25px;
            font-size: 10px;
        }
    }
`