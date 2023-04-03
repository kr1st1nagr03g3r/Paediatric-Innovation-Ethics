import * as React from 'react'
import Images from '../public/images/index'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Tooltip from './tooltips/Tooltip'

export default function RoadmapTab01() {
  return (
    <>
      <style jsx>{`
        .tooltipContainer {
            width: { sm: '600px', md: '600px', lg: '1200px' }
        }
        span.hoverInfo {
          display: flex;
        }

        @media only screen and (max-width: 1200px) {
   
          span.hoverInfo {
            display: none !important;

            .buttonContainerTabs {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: center;
            }
          }

        }
      `}</style>
<div>
      <Container maxWidth="lg">
        <p>
          The colours along the road represent the stages of development that
          research moves through as it is refined, tested, and ultimately used
          to create a product for clinical use. From drug discovery through to
          manufacturing and distribution, each stage along the road is met with
          various obstacles and requires the participation of specific
          stakeholders. <strong>We represent these stages as follows:</strong>
        </p>
        <p>Click each icon to learn more.</p>
        <div >
          <Container
            className="buttonContainerTabs"
            maxWidth="lg"
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* //# Tooltips */}
            <Tooltip colour="red" text="Drug&nbsp;Discovery" />
            <Tooltip
              colour="orangeGradient"
              text="Drug Discovery&nbsp;/&nbsp;Pre-Clinical"
            />
            <Tooltip colour="yellow" text="Pre&nbsp;&ndash;&nbsp;Clinical" />
            <Tooltip colour="blue" text="IND" />
            <Tooltip colour="purple" text="Clinical&nbsp;Trials" />
            <Tooltip colour="orange" text="NDA" />
            <Tooltip
              colour="green"
              text="Manufacturing&nbsp;&amp;&nbsp;Distributing"
            />
          </Container>
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
      </div>
    </>
  )
}

