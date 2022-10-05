import * as React from 'react'
import styles from '../styles/Research.module.css'
import Images from '../public/images/index'
import Image from 'next/image'
import Container from '@mui/material/Container'
import TooltipRed from './tooltips/TooltipRed'
import TooltipOrangeG from './tooltips/TooltipOrangeG'
import { Box } from '@mui/system'
import TooltipYellow from './tooltips/TooltipYellow'
import TooltipBlue from './tooltips/TooltipBlue'
import TooltipPurple from './tooltips/TooltipPurple'
import TooltipOrange from './tooltips/TooltipOrange'
import TooltipGreen from './tooltips/TooltipGreen'

export default function RoadmapTab01() {
  return (
    <>
      <Container className={styles.roadmapInfo}>
        <p>
          The colours along the road represent the stages of development that
          research moves through as it is refined, tested, and ultimately used
          to create a product for clinical use. From drug discovery through to
          manufacturing and distribution, each stage along the road is met with
          various obstacles and requires the participation of specific
          stakeholders. <strong>We represent these stages as follows:</strong>
        </p>
      </Container>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        {/* //# Tooltips */}
        <TooltipRed />
        <TooltipOrangeG />
        <TooltipYellow />
        <TooltipBlue />
        <TooltipPurple />
        <TooltipOrange />
        <TooltipGreen />
      </Box>
      <Container Container className={styles.research}>
        <Container>
          <Image
            className={styles.rainbow}
            src={Images.rainbowRoad}
            alt="green grass background for many buildings"
          />
        </Container>
      </Container>
    </>
  )
}
{
}
