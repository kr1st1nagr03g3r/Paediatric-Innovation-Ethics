import * as React from 'react'
import { styled } from '@mui/material/styles'
import styles from '../styles/Research.module.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Images from '../public/images/research'
import Image from 'next/image'
import { Box, Container } from '@mui/material'
import BarriersDarkRoad from './BarriersDarkRoad'

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
      <style jsx>{``}</style>
      <div>
        <Container className={styles.roadmapInfo}>
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
            <br></br>
          </p>
        </Container>
        <HtmlTooltip
          followCursor={true}
          title={
            <>
              <Box>
                <h3 className="bold tooltipTitle">I&apos;m Interactive!</h3>
                <p className="black">
                  The Innovation Roadmap is interactive. Hover over items to
                  learn more about them.
                </p>
              </Box>
            </>
          }
        >
          <Container>
            {/* <Image
              src={Images.road00}
              alt="green grass background for many buildings"
            /> */}
          </Container>
        </HtmlTooltip>
        <BarriersDarkRoad />
      </div>
    </>
  )
}
