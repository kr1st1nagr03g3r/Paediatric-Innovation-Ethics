import * as React from 'react'
import styles from '../styles/Research.module.css'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Buildings from './Buildings'
import { Button } from '@mui/material'

export default function RoadmapTab03() {
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
        <Container className={styles.research}>
          <p>
            Barriers and roadblocks (depicted by traffic signs and obstructions)
            represent the challenges and obstacles that potentially hinder the
            development and commercialization of new drugs. They can be
            bottlenecks that slow movement along the “road” to a trickle, or
            broader, more consequential obstructions that bring movement to a
            grinding halt.
            <br></br> <br></br>
            <span className="hoverInfo center">
              <p>Hover over these items to learn more.</p>
            </span>
            <span className="centerButton center">
              <Button href="/model-overview/drug-discovery">Learn More</Button>
            </span>
          </p>
        </Container>

        <Buildings />
      </div>
    </>
  )
}
