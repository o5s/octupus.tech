import React from "react"
import TextLoop from "react-text-loop"
import styled from "styled-components"

import MainLayout from "../components/layouts/MainLayout"

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 22px;
  margin-top: 25px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 50px;
  }
`

const Description = styled.p`
  font-size: 36px;
  line-height: 40px;
  max-width: 650px;

  & b {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 50px;
  }
`

const IndexPage = () => (
  <MainLayout>
    <Container>
      <div>
        <Description>
          3 hearts, 9 brains, just to make your{" "}
          <TextLoop>
            <b>mobile</b>
            <b>tablet</b>
            <b>website</b>
            <b>system</b>
          </TextLoop>{" "}
          looks good.
        </Description>
        <Title>&mdash; Octupus Technology</Title>
      </div>
    </Container>
  </MainLayout>
)

export default IndexPage
