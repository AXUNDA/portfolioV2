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
width:1400px;
display: flex;
justify-content: space-between;

`
const Left = styled.div`

`
const Right = styled.div`



`
const Hero = () => {
      return (
            <Section>
                  <Navbar />
                  <Container>
                        <Left>
                              <Title>Ideate. Create. Refine</Title>
                              <Line />
                        </Left>
                        <Right></Right>
                  </Container>
            </Section>
      );
}

export default Hero;
