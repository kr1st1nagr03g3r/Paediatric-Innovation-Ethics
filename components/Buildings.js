import Container from '@mui/material/Container'
import Image from 'next/image'
import Images from '../public/images/research/index'

import Tooltip01 from '../components/tooltips/Tooltip01'
import Tooltip02 from '../components/tooltips/Tooltip02'
import Tooltip03 from '../components/tooltips/Tooltip03'
import Tooltip04 from './tooltips/Tooltip04'
import Tooltip05 from './tooltips/Tooltip05'
import Tooltip06 from './tooltips/Tooltip06'
import Tooltip07 from './tooltips/Tooltip07'
import Tooltip08 from './tooltips/Tooltip08'
import Tooltip09 from './tooltips/Tooltip09'
import Tooltip10 from './tooltips/Tooltip10'
import Tooltip11 from './tooltips/Tooltip11'
import Tooltip12 from './tooltips/Tooltip12'
import Tooltip13 from './tooltips/Tooltip13'
import Tooltip14 from './tooltips/Tooltip14'
import Tooltip15 from './tooltips/Tooltip15'
import Monkey from './tooltips/Monkey'

import redHumanCapital from '../public/images/01drugDiscovery/redHumanCapital.svg'
import redBeurocraticHurdles from '../public/images/01drugDiscovery/redBeurocraticHurdles.svg'

export default function Buildings() {
  return (
    <>
      <style jsx>
        {`
          .parent {
            position: relative;
            top: 0;
            left: 0;
          }
          .relative {
            position: relative;
            top: 0;
            left: 0;
          }
          .absolute {
            position: absolute;
            display: flex;
            top: 0;
            left: 0;
          }

          .height {
            z-index: 1;
          }

          .size {
            width: 200px;
            height: 200px;
          }

          .buildingPosition01 {
            top: 76px;
            left: 32px;
          }
          .buildingPosition02 {
            top: 320px;
            left: 32px;
          }
          .buildingPosition03 {
            top: 530px;
            left: 32px;
          }
          .mobileBarriers {
            display: none;
          }

          @media only screen and (max-width: 1200px) {
            .absolute,
            .relative,
            .rainbowRoad {
              display: none;
            }
            .mobileBarriers {
              display: block;
            }
          }
        `}
      </style>
      <Container>
        <div className="parent">
          <div className="mobileBarriers">
            <Image
              src={Images.buildingsMobile}
              width={1150}
              height={900}
              alt="green grass background for many buildings"
            />
          </div>

          <div className="relative">
            <Image
              src={Images.rainbowRoad}
              width={1150}
              height={900}
              alt="green grass background for many buildings"
            />
            <Image
              className="rainbowRoad"
              src={Images.rainbowRoad}
              width={1150}
              height={900}
              alt="green grass background for many buildings"
            />

            <div className="absolute size buildingPosition01">
              <Tooltip01 />
              <Tooltip02 />
              <Tooltip03 />
              <Tooltip04 />
              <Tooltip05 />
            </div>
            <div className="absolute size buildingPosition02">
              <Tooltip08 />
              <Tooltip09 />
              <Tooltip10 />
              <Tooltip07 />
              <Tooltip06 />
            </div>
            <div className="absolute size buildingPosition03">
              <Tooltip11 />
              <Tooltip13 />
              <Tooltip14 />
              <Tooltip15 />
              <Tooltip12 />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
