import styled from "styled-components";

import {professionals} from './Professionals.action';

function Profissionals(){

    return(
        <DivProfissionals>
            {professionals?.map((professional, index) => (
                <Flex key={index}>
                    <div id="margin">
                        <img src={professional.photo} alt="" />

                        <div id="center">
                           <img id="tiktok" src="./tiktok.png" alt="" /> 

                           <a href="">{professional.name}  </a> 
                        </div>

                        <div id="center">
                            <img id="insta" src="./insta.png" alt="" />  

                            <a href="">{professional.insta}</a>
                        </div>
                    </div>
                </Flex>
            ))}

        </DivProfissionals>
    )
}
export default Profissionals;

const DivProfissionals = styled.div`
    max-width: 1200px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`

    const Flex = styled.section`
        max-width: 290px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        #margin {
            margin: 10px;
        }

            img {
                max-width: 196px;
                max-height: 206px;
            }

            #center {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 80%;
                height: 30px;
                margin: 10px;
                font-weight: 800;
                font-size: 13px;
                line-height: 16px;
                color: #000000;
            }

                a {
                    text-decoration: none;
                    color: black;
                }

                #tiktok {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }

                #insta {
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                }
    `