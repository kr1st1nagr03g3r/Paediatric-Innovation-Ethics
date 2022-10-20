import * as React from 'react'
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
import { Button } from '@mui/material'

export default function RoadmapTab01() {
  return (
    <>
      <style jsx>{`
        .tooltipButtons {
          display: flex;
        }
        span.hoverInfo {
          display: flex;
        }
        span.centerButton {
          display: none !important;
        }

        @media only screen and (max-width: 1200px) {
          .tooltipButtons {
            display: block;
          }
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
        <Container maxWidth="lg">
          <p>
            The colours along the road represent the stages of development that
            research moves through as it is refined, tested, and ultimately used
            to create a product for clinical use. From drug discovery through to
            manufacturing and distribution, each stage along the road is met
            with various obstacles and requires the participation of specific
            stakeholders. <strong>We represent these stages as follows:</strong>
          </p>
          <span className="hoverInfo center">
            <p>Hover over these colour tabs to learn more.</p>
          </span>
          <span className="centerButton center">
            <p>Press on the colour tabs below to learn more.</p>
          </span>
          <Container
            maxWidth="lg"
            disableGutters={true}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              cursor: 'pointer',
              width: { sm: '600px', md: '600px', lg: '1200px' },
            }}
          >
            {/* //# Tooltips */}
            <div className="tooltipButtons">
              <TooltipRed />
              <TooltipOrangeG />
              <TooltipYellow />
            </div>
            <div className="tooltipButtons">
              <TooltipBlue />
              <TooltipPurple />
              <TooltipOrange />
              <TooltipGreen />
            </div>
          </Container>
          <Container maxWidth="lg">
            <Image
              src={Images.rainbowRoad}
              width={1150}
              height={900}
              alt="green grass background for many buildings"
            />
          </Container>
        </Container>
      </div>
    </>
  )
}
{
}
