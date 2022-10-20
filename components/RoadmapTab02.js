import * as React from 'react'
import styles from '../styles/Research.module.css'
import Images from '../public/images/index'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import ImageTest from './Barriers'
import Barriers from './Barriers'

// const HtmlTooltip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 600,
//     border: '1px solid #dadde9',
//     fontFamily: 'Nunito',
//     padding: '30px',
//     borderRadius: '25px',
//   },
// }))

export default function RoadmapTab02() {
  return (
    <>
      <style jsx>{`
        .relative {
          position: relative;
          display: block;
        }
        .absolute {
          position: absolute;
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
            Barriers and roadblocks (depicted by traffic signs and obstructions)
            represent the challenges and obstacles that potentially hinder the
            development and commercialization of new drugs. They can be
            bottlenecks that slow movement along the “road” to a trickle, or
            broader, more consequential obstructions that bring movement to a
            grinding halt.
            <br></br>
            Hover over the buildings to learn more...
          </p>
          <span className="hoverInfo center">
            <p>Hover over these items to learn more.</p>
          </span>
          <span className="centerButton center">
            <Button href="/model-overview/drug-discovery">Learn More</Button>
          </span>
          <Barriers />
        </Container>
      </div>
    </>
  )
}
