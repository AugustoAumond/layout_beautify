import styled from "styled-components";

import {listServices} from './Services.actions'

function Services(){
    return (
        <DivServices>
            {listServices.map((item, index)=>(
            <Flex key={index}>
                <img src={item.img} alt="" />

                <p>{item.description}</p>
            </Flex>
            ))}   
        </DivServices>
    )
}
export default Services;

const DivServices = styled.div`
    position: relative;
    top: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 216px;
    max-width: 800px;

    @media (max-width: 900px){
        margin: 0 auto;
        justify-content: center;
        top: 80px;
    }
`

    const Flex = styled.div`
        display: flex;

        img {
            width: 77px;
            height: 75px;
        }

        p {
            width: 231px;
            height: 154px;
            margin-top: 0px;
        }
    `