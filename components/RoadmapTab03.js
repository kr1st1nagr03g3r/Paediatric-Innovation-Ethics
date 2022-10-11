import * as React from 'react'
import styles from '../styles/Research.module.css'
import Images from '../public/images/index'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ImageTest from './Barriers'
import Barriers from './Barriers'
import Buildings from './Buildings'

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
            <br></br>
            Hover over the buildings to learn more...
          </p>
          <Box className={styles.wrapper}></Box>
        </Container>
        <Buildings />
      </div>
    </>
  )
}
