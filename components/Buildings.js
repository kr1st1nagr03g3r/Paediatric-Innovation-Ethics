import Container from '@mui/material/Container'
import Image from 'next/image'
import Images from '../public/images/research/index'

import Tooltip01 from '../components/tooltips/Tooltip01'
import Tooltip02 from '../components/tooltips/Tooltip02'

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
            top: 100px;
            left: 300px;
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
            </div>
            <div className="absolute size buildingPosition02">
              <Tooltip02 />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
