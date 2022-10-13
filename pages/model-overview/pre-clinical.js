import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'

import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer'
import CarouselPC from '../../components/CarouselPC'
import Card from '../../components/Card'
import Images from '../../public/images/03preClinical/index.js'
import Container from '@mui/material/Container'

export default function PreClinical() {
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
      <CarouselPC />
      <Container
        maxWidth
        disableGutters={true}
        sx={{ background: '#00a122', padding: '60px 0px' }}
      >
        <Container maxWidth="lg">
          <div>
            <div>
              <p>
                The pre-clinical stage evaluates the drug&apos;s safety and
                efficacy in non-human animals and extrapolates the results to
                prospective human outcomes. At this stage, in-vivo studies are
                conducted to understand optimal dosage, rates of metabolism and
                elimination, and the half-life of the drug. Toxicologic studies
                help to shed light on the drug&apos;s potential toxicity. This
                stage involves regulatory oversight and approval to ensure that
                studies are conducted safely and ethically.{' '}
              </p>
            </div>
          </div>
        </Container>
        <Card>
          <div id="CRO" className="imageStyle">
            <Image src={Images.PCCRO} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">CRO:</b> In the pre-clinical stage, Contract
              Research Organizations (CROs) are contracted by universities to
              test new drug candidates prior to human testing. This typically
              includes compound synthesis and conducting animal studies.
            </p>
          </div>
        </Card>

        <Card>
          <div id="hurdles" className="imageStyle">
            <Image src={Images.PCBHurdles} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Bureaucratic Hurdles:</b> Bureaucratic
              hurdles in the drug discovery stage include but are not limited to
              filing for human subjects, IRB approval, negotiating contracts,
              managing IP filings, and other organizational issues. Hurdles
              often occur at points of interaction between different
              stakeholders (e.g. scientists acquiring lab space within a
              university, research teams partnering with a contract research
              organization, TTOs mediating between research teams,
              administrative staff managing funding and research group members).{' '}
            </p>
          </div>
        </Card>

        <Card>
          <div id="research" className="imageStyle">
            <Image src={Images.PCResearch} width="100" height="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Research Translation:</b>Translating
              benchwork to animal studies is another hurdle faced by researchers
              at this stage. Before human trials can begin, ideas from the
              earliest phase of drug discovery must be translated successfully
              into animal studies to test the proof of principal in vivo.{' '}
            </p>
          </div>
        </Card>
      </Container>
      <GreenSpacer />
      <Footer />
    </>
  )
}
