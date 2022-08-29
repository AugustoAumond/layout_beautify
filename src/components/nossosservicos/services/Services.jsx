import styled from "styled-components";

import {services} from './Services.actions';

import Button from "../../../material/buttons/Buttons";

function Services(){
    return (
        <DivServices>
            {services.map((item, index)=>(
               <Flex key={index}>
                    <img src={item.photo} alt="" />

                    <div id="column">
                        <p>{item.service}</p>

                        <Button text={'Agendar'}/>
                    </div>  
                </Flex> 
            ))}
        </DivServices>
    )
}
export default Services;

const DivServices = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    max-width: 1050px;
    justify-content: center;
    margin: 0 auto;
`

    const Flex = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 297px;
        height: 199px;
        margin: 25px;

            img {
                position: absolute;
                border-radius: 20px;
                width: 100%;
                max-width: 297px;
                height: 100%;
                max-height: 199px; 
            }

            #column {
                display: flex;
                flex-direction: column;
                margin-top: 50px;
                justify-content: center;
                align-items: center;
            }

                p {
                    position: relative;
                    width: 230px;
                    text-align: center;
                    font-style: italic;
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 22px;
                    color: white;
                }

                #button {
                    background: #E29579;
                    position: relative;
                    height: 30px;
                    width: 153px;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 22px;
                    transition: 0.5s;
                }

                #button:hover {
                    background: #84C5BF;
                } 
                
        @media (max-width: 550px){
            p {
                font-size: 14px;
            }

            #button {
                height: 20px;
                width: 113px;
                font-size: 14px;
            }
        }
`