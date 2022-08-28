import styled from "styled-components"
import './Austein.css';

import Menu from "../../components/menu/Menu";
import Baner from "../../components/baner/Baner";
import About from "../../components/about/About";
import NossosServicos from "../../components/nossosservicos/NossoServicos";
import NossosProfissionais from "../../components/nossosprofissionais/NossosProfissionais";
import Video from "../../components/video/Video";

function Homepage() {

  return (
    <Home>
      <Space/>

      <Menu/>

      <Baner/>

      <About/>

      <NossosServicos/>

      <NossosProfissionais/>

      <Video/>

      <Footer/>
    </Home>
  )
}

export default Homepage

const Home = styled.div`
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;

`

  const Space = styled.div`
    max-width: 1440px;
    height: 43px;
    background: #E0A894;
    margin: 0 auto;
  `

  const Footer = styled.footer `
    position: relative;
    top: 350px;
    margin: 0 auto;
    height: 100px;
    max-width: 1420px;
    background: #D9D9D9;
  `