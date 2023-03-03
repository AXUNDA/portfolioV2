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

`
const Right = styled.div`

`
const Title = styled.h1`

`
const WhatWeDo = styled.div`

`
const Line = styled.img`

`
const Subtitle = styled.h2`

`
const Desc = styled.p`

`
const Img = styled.img`

`







const Hero = () => {
      return (
            <Section>
                  <Navbar />
                  <Container>
                        <Left>
                              <Title>Ideate. Create. Refine</Title>
                              <WhatWeDo>
                                    <Line src="./img/line.png" />
                                    <Subtitle>Wat I do</Subtitle>


                              </WhatWeDo>
                              <Desc>I enjoy creating delightful,human-centered digital experiences</Desc>
                              <button>Learn More</button>
                        </Left>
                        <Right>
                              <Img src="./img/moon.png" />
                        </Right>
                  </Container>
            </Section>
      );
}

export default Hero;
