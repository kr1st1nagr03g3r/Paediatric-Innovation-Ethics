import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer'
import CarouselIND from '../../components/CarouselIND'
import Card from '../../components/Card'
import Images from '../../public/images/04IND/index.js'
import Container from '@mui/material/Container'
class IND extends React.PureComponent {
  state = {}
  render() {
    return (
      <>
        <style jsx>{`
          .imageStyle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 300px;
            min-width: 200px;
            height: auto;
            padding: 20px;
          }

          .imageStyleSmall {
            width: 15%;
          }

          .lastCard {
            margin-bottom: 30px;
          }
        `}</style>
        <Navigation />
        <CarouselIND />
        <Container
          maxWidth
          disableGutters={true}
          sx={{ background: '#00a122', padding: '60px 0px' }}
        >
          <Container maxWidth="lg">
            <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
              <p className="containerGlobal text-center px-[50px] py-[60px]">
                Prior to testing in humans, drug developers must file their
                Investigational New Drug (IND) application with their governing
                regulatory body. This IND application includes preclinical and
                toxicity study data, and drug manufacturing information.
                Clinical research protocols outlining selection criteria for
                trial participants, number of participants, duration of study,
                dose and administration route, and data collection and analysis
                are also included in the IND application.
              </p>
            </div>
          </Container>
          <Card>
            <div id="regagency" className="imageStyle">
              <Image src={Images.INDRegA} height="100" width="100" alt="" />
            </div>
            <div>
              <p className="black">
                <b className="bolder">Regulatory Agency</b>: At the IND stage,
                regulatory agencies review preclinical and toxicity study data
                previously completed, in addition to drug manufacturing
                information and clinical research protocols.{' '}
              </p>
            </div>
          </Card>

          <Card>
            <div id="research" className="imageStyle">
              <Image src={Images.INDBHurdles} width="100" height="100" alt="" />
            </div>
            <div>
              <p className="black">
                <b className="bolder">Bureaucratic Hurdles</b>: Regulatory
                compliance in and of itself presents a barrier for developers,
                simply given the sheer volume of data required by regulatory
                agencies prior to moving on to human trials.{' '}
              </p>
            </div>
          </Card>
        </Container>{' '}
        <GreenSpacer />
        <Footer />
      </>
    )
  }
}

export default IND
