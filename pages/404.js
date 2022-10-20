import { Container } from '@mui/system'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import fourohfour from '../public/images/home/404.svg'

export default function Custom404() {
  return (
    <>
      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          .fourohfour {
            height: 100vh;
            width: 100vw;
            display: flex;
            padding-top: 120px;
          }
        `}
      </style>
      <Navigation />
      <div className="fourohfour">
        <Container maxWidth="lg">
          <h1 className="center">Sorry, that page cannot be found.</h1>
          <span className="center">
            <Image src={fourohfour} alt="404 error message" width={800} />
          </span>
        </Container>
      </div>
    </>
  )
}
