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
        .barriersAndRoadBlocks {
          width: 100% !important;
        }

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

        .redLink {
          height: 100px;
          width: 100%;
          z-index: 1000;
          top: 0;
          left: 0;
          position: absolute;
        }

        .gradientLink {
          height: 206px;
          width: 75%;
          z-index: 1000;
          top: 116px;
          right: 0;
          position: absolute;
        }
        .yellowLink {
          height: 246px;
          width: 100%;
          z-index: 1000;
          top: 220px;
          left: 0;
          position: absolute;
          max-width: 300px;
        }

        .blueLink {
          height: 200px;
          width: 30%;
          z-index: 1000;
          top: 330px;
          right: 0;
          position: absolute;
        }

        .purpleLink {
          height: 136px;
          width: 100%;
          z-index: 1000;
          top: 521px;
          left: 0;
          position: absolute;
        }


        .greenLink {
          height: 200px;
          width: 100%;
          z-index: 1000;
          top: 679px;
          left: 0;
          position: absolute;
        }
         
           @media only screen and (max-width: 1200px) {
            span.hoverInfo {
            display: none !important;
            }

            span.centerButton.center {
            padding: 20px 0px;
            display: flex !important;
            }

            .barriersAndRoadBlocks {
              width: 100%;
              max-width: 1200px;
            } 
          }   


          @media only screen and (max-width: 1024px) {
            .gradientLink {
              height: 176px;
            }

            .yellowLink {
              height: 184px;
            }

            .blueLink {
              height: 98px;
              width: 30%;
              top: 270px;
            }

            .purpleLink {
              top: 414px;
            }

            .greenLink {
              height: 158px;
              top: 522px;
            }

          }

          @media only screen and (max-width: 768px) {
            .gradientLink {
              height: 106px;
              top: 57px;
            }

            .yellowLink {
              height: 128px;
              top: 141px;
              max-width: 205px;
            }

            .blueLink {
              top: 178px;
            }

            .purpleLink {
              height: 120px;
              top: 253px;
            }

            .greenLink {
              height: 137px;
              top: 360px;
            }

            @media only screen and (max-width: 768px) {
              .greenLink, .purpleLink, .blueLink, .yellowLink, .gradientLink {
                display: none;
              }

              .redLink {
                height: 100%;
              }
            } 

          }
        
      `}</style>
      <div>
        <Container>
          <div className="barriersAndRoadblocks">
            <p>
              Barriers and roadblocks (depicted by traffic signs and
              obstructions) represent the challenges and obstacles that
              potentially hinder the development and commercialization of new
              drugs. They can be bottlenecks that slow movement along the “road”
              to a trickle, or broader, more consequential obstructions that
              bring movement to a grinding halt.
            </p>
            <span className="hoverInfo center">
              <p>Click on these items to learn more.</p>
            </span>
            <div className="relative">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/barriersAndRoadBlocks.png" alt="" width="100%"></img>

                <Link passHref href="/model-overview/drug-discovery">
                  <div className="redLink cursorPointer"></div>
                </Link>

                <Link passHref href="/model-overview/drug-discovery-pre-clinical">
                  <div className="gradientLink cursorPointer"></div>
                </Link>

                                
                <Link passHref href="/model-overview/pre-clinical">
                  <div className="yellowLink cursorPointer"></div>
                </Link>

                <Link passHref href="/model-overview/ind">
                  <div className="blueLink cursorPointer"></div>
                </Link>


                <Link passHref href="/model-overview/clinical-trials">
                  <div className="purpleLink cursorPointer"></div>
                </Link>        

                <Link passHref href="/model-overview/manufacturing-distributing">
                  <div className="greenLink cursorPointer"></div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
