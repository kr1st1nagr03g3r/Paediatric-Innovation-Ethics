import Container from '@mui/material/Container'
import React from 'react'
import Image from 'next/image'
import Images from '../public/images/research/index'
// IMAGES
import barriersRoadblocks from '../public/images/research/barriersRoadblocks.png'

export default function Buildings() {
  return (
    <>
      <style jsx>
        {`
          .parent {
            position: relative;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: row;
          }
          .relative {
            position: relative;
            top: 0;
            left: 0;
          }
          .absolute {
            position: absolute;
            display: flex;
            top: -111px;
            left: -104px;
          }

          .height {
            z-index: 1;
          }

          .size {
            width: 200px;
            height: 200px;
          }
          .mobileBarriers {
            display: none;
          }

          @media only screen and (max-width: 1200px) {
            .absolute,
            .relative {
              display: none;
            }
            .mobileBarriers {
              display: block;
            }
          }
        `}
      </style>
      <Container maxWidth="lg" disableGutters={true}>
        <Image src={Images.barriersRoadblocks} alt="" usemap="imageMap" />
        <map name="imageMap">
          <area
            target=""
            alt=""
            title=""
            href="/model-overview/drug-discovery"
            coords="131,63,44"
            shape="circle"
          />
          <area
            target=""
            alt=""
            title=""
            href="/model-overview/drug-discovery"
            coords="255,67,40"
            shape="circle"
          />
          <area
            target=""
            alt=""
            title=""
            href="/model-overview/drug-discovery"
            coords="378,64,48"
            shape="circle"
          />
        </map>
      </Container>
    </>
  )
}
