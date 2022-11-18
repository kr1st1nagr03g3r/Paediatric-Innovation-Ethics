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
      `}</style>
      <div>
        <Container className={styles.research}>
          <p>
            The buildings along the road represent the institutional
            stakeholders involved in the development and commercialization of
            new drugs.
            <br></br> <br></br>
            <span className="hoverInfo center">
              <p>Click each icon to learn more.</p>
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
