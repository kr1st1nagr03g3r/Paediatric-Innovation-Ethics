import * as React from 'react'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import Images from '../public/images/research/index'

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 600,
    border: '1px solid #dadde9',
    fontFamily: 'Nunito',
    padding: '30px',
    borderRadius: '25px',
  },
}))

export default function RoadmapTab00() {
  return (
    <>
      <style jsx>{`

      .imageSize {
        margin-top: 60px;
      }
   
   span.hoverInfo {
  display: flex;
}
span.centerButton {
  display: none !important;
}
          @media only screen and (max-width: 1200px) {
span.hoverInfo {
  display: none !important;
}
span.centerButton.center {
  padding: 20px 0px;
  display: flex !important;
}

          }
        }
      `}</style>
      <div>
        <Container maxWidth="lg">
          <p>
            The Innovation Roadmap is a representation of how scientific
            research moves from “bench to bedside,” specifically in the context
            of developing and commercializing new drug products. The Innovation
            Roadmap presents an alternative to the traditional drug pipeline
            model: it challenges the idea that scientific innovation and drug
            development is linear. The model allows for movement back and forth
            on the road, but also presents possibilities for alternative routes
            and travel methods to “hack” the roadmap and existing barriers to
            innovation.<br></br>
          </p>
          <span className="hoverInfo center">
            {/* <p>Hover over these items to learn more.</p> */}
          </span>
          {/* <span className="centerButton center">
            <Button href="/model-overview/drug-discovery">Learn More</Button>
          </span> */}
        </Container>
        <div className="imageSize">
          <Box>
            <Image src={Images.roadmap} alt="" width="" height="" />
          </Box>
        </div>
      </div>
    </>
  )
}
