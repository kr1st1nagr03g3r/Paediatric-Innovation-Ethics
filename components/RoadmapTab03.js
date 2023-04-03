import * as React from 'react'
import styles from '../styles/Research.module.css'
import Images from '../public/images/research/index'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'
import ImageTest from './Barriers'
import Barriers from './Barriers'
import Link from 'next/link'

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

.relative {
 position: relative;
}

.absolute {
  position: absolute;
}

.redLink {
  height: 100px;
  width: 1000px;
  z-index: 1000;
  top: 0;
  left: 0;
  position: absolute;
}

.gradientLink {
    height: 100px;
  width: 1000px;
  z-index: 1000;
  top: 0;
  left: 0;
  position: absolute;
      margin-top: 110px;
}
.purpleLink {
    height: 100px;
  width: 1000px;
  z-index: 1000;
  top: 0;
  left: 0;
  position: absolute;
      margin-top: 410px;
}

.greenLink {
height: 200px;
width: 1000px;
    z-index: 1000;
    top: 0;
    left: 0;
    position: absolute;
    margin-top: 529px;
}

.blueLink {
    height: 200px;
    width: 200px;
    z-index: 1000;
    top: 0;
    left: 0;
    position: absolute;
    margin-top: 214px;
    margin-left: 200px;
}

.yellowLink {
    height: 200px;
    width: 200px;

    z-index: 1000;
    top: 0;
    left: 0;
    position: absolute;
    margin-top: 214px;
    margin-left: 420px;
}

.orangeLink {
    height: 200px;
    width: 200px;
   
    z-index: 1000;
    top: 0;
    left: 0;
    position: absolute;
    margin-top: 212px;
    margin-left: 689px;
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
            The buildings along the road represent the institutional
            stakeholders involved in the development and commercialization of
            new drugs.
          </p>
          <span className="hoverInfo center">
            <p>Click on these items to learn more.</p>
          </span>
          <div className="relative">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/buildingsInstitutions.png" alt="" width="100%"></img>
              <Link passHref href="/model-overview/drug-discovery">
                <div className="redLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/drug-discovery-pre-clinical">
                <div className="gradientLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/clinical-trials">
                <div className="purpleLink cursorPointer"></div>
              </Link>

              <Link passHref href="/model-overview/ind">
                <div className="blueLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/pre-clinical">
                <div className="yellowLink cursorPointer"></div>
              </Link>
              <Link passHref href="/model-overview/nda">
                <div className="orangeLink cursorPointer"></div>
              </Link>

              <Link passHref href="/model-overview/manufacturing-distributing">
                <div className="greenLink cursorPointer"></div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
