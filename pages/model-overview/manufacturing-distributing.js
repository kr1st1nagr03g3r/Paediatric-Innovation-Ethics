import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer'
import CarouselMandD from '../../components/CarouselMandD'
import Card from '../../components/Card'
import Images from '../../public/images/07MandD/index.js'
import Container from '@mui/material/Container'

export default function Drugdiscovery() {
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
      <CarouselMandD />
      <Container
        maxWidth
        disableGutters={true}
        sx={{ background: '#00a122', padding: '60px 0px' }}
      >
        <Container maxWidth="lg">
          {' '}
          <p className="containerGlobal text-center px-[50px] py-[60px]">
            Following regulatory approval for clinical use, developers must then
            manufacture and develop the drug at commercial scale. This involves
            working out logistical issues related to product labeling,
            packaging, shipping, and storage.
          </p>
        </Container>

        <Card>
          <div id="MandDIndustry" className="imageStyle">
            <Image src={Images.MandDIndustry} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Industry</b>: Typically industry is
              responsible for manufacturing and distributing its new drugs, in
              addition to conducting ongoing post-marketing safety surveillance
              studies.
            </p>
          </div>
        </Card>

        <Card>
          <div id="MandDRegA" className="imageStyle">
            <Image src={Images.MandDRegA} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Regulatory Agencies</b>: Regulatory agencies
              are tasked with ensuring drug manufacturers are meeting
              jurisdictional standards related to drug pricing, labeling,
              off-label use, quality, safety, monitoring serious adverse events,
              and efficacy.
            </p>
          </div>
        </Card>

        <Card>
          <div id="MandDInsurance" className="imageStyle">
            <Image
              src={Images.MandDInsurance}
              height="100"
              width="100"
              alt=""
            />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Insurance Agencies & Payors</b>: Insurance
              agencies and provincial payors undertake cost/benefit analyses to
              make decision on reimbursement, which significantly impacts
              patient access to new, often costly, drugs.
            </p>
          </div>
        </Card>

        <Card>
          <div id="MandDCrack" className="imageStyle">
            <Image src={Images.MandDCrack} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Manufacturing Infrastructure</b>: Challenges
              associated with manufacturing a new drug include but are not
              limited to the high costs associated with commercial-scale
              production, the costs of ongoing testing and oversight, and the
              physical infrastructure needed to produce pharmaceuticals (e.g.
              the physical building space and equipment).
            </p>
          </div>
        </Card>

        <Card>
          <div id="MandDBHurdles" className="imageStyle">
            <Image src={Images.MandDBHurdles} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Bureaucratic Hurdles</b>: Bureaucratic
              hurdles at this stage include ongoing regulatory compliance, and
              the management of IP (particularly as generics begin to be
              developed). Complying with regulatory standards, managing IP, and
              manufacturing and distributing a drug at commercial scale require
              significant funds, human capital, infrastructure, and time.
            </p>
          </div>
        </Card>

        <Card>
          <div id="MandDCost" className="imageStyle">
            <Image width="100" height="100" alt="" src={Images.MandDCost} />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Cost & Reimbursement</b>: These hurdles
              include costs for the drug in question, negotiating insurance
              coverage (in the US) and provincial drug reimbursement (in
              Canada). Drug reimbursement varies among provinces in Canada, as
              each province has its own formulary.
            </p>
          </div>
        </Card>
      </Container>
      <GreenSpacer />
      <Footer />
    </>
  )
}
