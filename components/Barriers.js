import { Container } from '@mui/material'
import Image from 'next/image'
import Images from '../public/images/index/index'

export default function ImageTest() {
  return (
    <>
      <style jsx>
        {`
          .parent {
            position: relative;
            top: 0;
            left: 0;
          }
          .image1 {
            position: relative;
            top: 0;
            left: 0;
          }
          .image2 {
            position: absolute;
            display: flex;
            top: 0;
            left: 0;
          }
        `}
      </style>
      <Container>
        <div className="parent">
          <div className="image1">
            <Image
              src={Images.rainbowRoad}
              alt="green grass background for many buildings"
            />
          </div>

          <div className="image2">
            <Image
              width={1150}
              src={Images.tab02temp}
              alt="green grass background for many buildings"
            />
          </div>
        </div>
      </Container>
    </>
  )
}
