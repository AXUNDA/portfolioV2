import React from 'react';
import styled from "styled-components"
import Navbar from './Navbar';


const Section = styled.div`
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
scroll-snap-align:center;`

const Container = styled.div`
height:100vh;
scroll-snap-align:center;
width:1200px;
display: flex;
justify-content: space-between;


`
const Left = styled.div`
flex:2;
display: flex;
flex-direction: column;
justify-content: center;
gap:20px;


`
const Right = styled.div`
flex:3



`
const Title = styled.h1`
font-size:50px;
margin-bottom:0px;
margin-top:0px;


`
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap:10px;


`
const Line = styled.img`
height:5px;

`
const Subtitle = styled.h2`
color:#da4ea2;
margin-bottom:0px;
margin-top:0px;

`
const Desc = styled.p`
color:lightgrey;
font-size:24px;

`
const Img = styled.img`
width:800px;
height:600px;
object-fit: contain;
position: relative;
left: 0;
right: 0;
bottom: 0;
top: 0;
margin:auto;
animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }

`
const Button = styled.button`
background-color:#da4ea2;
font-weight:500;
color:white;
width:100px;
padding:15px;
border:none;
border-radius: 8px 0px 15px 0px;
cursor:pointer;

`







const Hero = () => {
      return (
            <Section>
                  <Navbar />
                  <Container>
                        <Left>
                              <Title>Ideate. Create. Refine.</Title>
                              <WhatWeDo>
                                    <Line src="./img/line.png" />
                                    <Subtitle>Wat I do</Subtitle>
                              </WhatWeDo>
                              <Desc>I enjoy creating delightful,human-centered digital experiences.</Desc>
                              <Button>Learn More</Button>
                        </Left>
                        <Right>
                              <Img src="./img/moon.png" />
                        </Right>
                  </Container>
            </Section>
      );
}

export default Hero;
