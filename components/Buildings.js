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
            top: 100px;
            left: 100px;
          }
          .buildingPosition02 {
            top: 350px;
            left: 100px;
          }
          .buildingPosition03 {
            top: 600px;
            left: 100px;
          }
          .buildingPosition04 {
            top: 240px;
            left: 53px;
          }
        `}
      </style>
      <Container>
        <div className="parent">
          <div className="relative">
            <Image
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
        {/* <div className="absolute buildingPosition04">
          <Monkey
            giraffeOne={{
              tooltipColour: 'tt01',
              title: 'Human Capital',
              description:
                'Human capital refers to the individual expertise and skills understood to be invaluable for a particular organization or endeavor. In the drug discovery stage, this refers to the institutional ability to hire and retain excellent scientists (including graduate students, post-doctoral researchers, faculty, and lab techs), as well as the ability to execute necessary non-scientific work (e.g. reviewing contracts and IP filings at TTOs). Human capital also includes human subject volunteers who participate in clinical trials.',
              link: '/model-overview/drug-discovery',
              icon: redHumanCapital,
              alt: 'Human Capital',
            }}
            giraffeTwo={{
              tooltipColour: 'tt02',
              title: 'Bureaucratic Hurdles',
              description:
                'Bureaucratic hurdles in the drug discovery stage include but are not limited to filing for human subjects approval, negotiating contracts, managing IP filings, and other organizational issues. Hurdles often occur at points of interaction between different stakeholders (e.g. scientists acquiring lab space within a university, research teams partnering with a contract research organization, TTOs mediating between research teams, administrative staff managing funding and research group members).',
              link: '/model-overview/drug-discovery',
              icon: redBeurocraticHurdles,
              alt: 'Bureaucratic Hurdles',
            }}
          />
        </div> */}
      </Container>
    </>
  )
}
