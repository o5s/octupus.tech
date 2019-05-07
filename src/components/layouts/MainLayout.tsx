import BackgroundImage from "gatsby-background-image"
import Helmet from "react-helmet"
import React from "react"
import reset from "styled-reset"
import styled, { createGlobalStyle } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    color: #fff;
  }
`

const Grid = styled.div`
  background-color: #0a0d15;
  display: grid;
  grid-template-areas: "left-panel right-panel";
  grid-template-columns: 1fr 40%;
  height: 100vh;
`

const LeftPanel = styled.div`
  grid-area: left-panel;
`

const RightPanel = styled.div`
  grid-area: right-panel;
`

const MainLayout = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const backgroundImageData = data.desktop.childImageSharp.fluid

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Octupus Technology</title>
      </Helmet>

      <Grid>
        <LeftPanel>{children}</LeftPanel>

        <RightPanel>
          <BackgroundImage
            className={className}
            Tag="div"
            fluid={backgroundImageData}
            style={{
              backgroundPosition: "center right",
              backgroundSize: "contain",
            }}
          />
        </RightPanel>
      </Grid>
    </>
  )
}

const StyledMainLayout = styled(MainLayout)`
  background-position: center right;
  background-size: contain;
  height: 100%;
  width: 100%;
`

export default StyledMainLayout
