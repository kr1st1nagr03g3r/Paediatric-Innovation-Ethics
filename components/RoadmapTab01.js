import * as React from 'react'
import Images from '../public/images/index'
import Image from 'next/image'
import Container from '@mui/material/Container'
import NextLink from 'next/link'

export default function RoadmapTab01() {
  return (
    <>
      <style jsx>{`
        .styled {
            padding: 15px;
            -webkit-border-radius: 25px;
            -moz-border-radius: 25px;
            border-radius: 25px;
            -webkit-box-shadow: #2f2b2b 3px 3px 12px;
            -moz-box-shadow: #2f2b2b 3px 3px 12px;
            box-shadow: #2f2b2b 3px 3px 12px;
            border: none !important;
            font-family: 'Nunito', sans-serif;
            font-weight: 400;
            line-height: 1.5;
            color: black !important;
            font-size: 18px;
            width: max-content;
            height: auto;
            cursor: pointer;
          
          }
        .tooltipContainer {
            width: { sm: '600px', md: '600px', lg: '1200px' }
        }
        span.hoverInfo {
          display: flex;
        }
  .buttonsPadding {
display: flex;
  }
span.space {
 margin: 15px !important;
}
  }

        @media only screen and (max-width: 1200px) {
   
          span.hoverInfo {
            display: none !important;
          }

        }
      `}</style>

      <Container maxWidth="lg">
        <p>
          The colours along the road represent the stages of development that
          research moves through as it is refined, tested, and ultimately used
          to create a product for clinical use. From drug discovery through to
          manufacturing and distribution, each stage along the road is met with
          various obstacles and requires the participation of specific
          stakeholders. <strong>We represent these stages as follows:</strong>
        </p>
        <p className="center">Click each button to learn more.</p>
        <div>
          <Container
            className="spacer"
            maxWidth="lg"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* //# buttons */}
            <div className="buttonsPadding">
              <NextLink href="/model-overview/drug-discovery" passHref>
                <button className="styled button red">Drug Discovery</button>
              </NextLink>

              <span className="space"></span>
              <NextLink
                href="/model-overview/drug-discovery-pre-clinical"
                passHref
              >
                <button className="styled button orangeGradient">
                  Drug Discovery - Pre Clinical
                </button>
              </NextLink>
              <span className="space"></span>
              <NextLink href="/model-overview/pre-clinical" passHref>
                <button className="styled button yellow">Pre Clinical</button>
              </NextLink>
            </div>
            <div className="buttonsPadding">
              <NextLink href="/model-overview/ind" passHref>
                <button className="styled button blue">IND</button>
              </NextLink>
              <span className="space"></span>

              <NextLink href="/model-overview/clinical-trials" passHref>
                <button className="styled button purple">
                  Clinical Trials
                </button>
              </NextLink>
              <span className="space"></span>
              <NextLink href="/model-overview/nda" passHref>
                <button className="styled button orange">NDA</button>
              </NextLink>
              <span className="space"></span>
              <NextLink
                href="/model-overview/manufacturing-distributing"
                passHref
              >
                <button className="styled button green">
                  Manufacturing and Distributing
                </button>
              </NextLink>
            </div>
          </Container>
        </div>
      </Container>
      {/* <Container maxWidth="lg">
        <Image
          src={Images.rainbowRoad}
          width={1150}
          height={900}
          alt="green grass background for many buildings"
        />
      </Container> */}
    </>
  )
}
{
}