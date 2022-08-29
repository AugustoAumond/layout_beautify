import styled from "styled-components";

function Button(props){

    return (
        <ButtonStyle id="button">
            {props.text} 
        </ButtonStyle>
    )
}
export default Button;

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background: #0D2239;
    border: white;
    border-radius: 20px;
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: white;
    cursor: pointer;
`