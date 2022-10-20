import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'

import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer'
import CarouselDD from '../../components/CarouselDD'
import Card from '../../components/Card'
import Images from '../../public/images/01drugDiscovery/index.js'
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
      <CarouselDD />
      <Container
        maxWidth
        disableGutters={true}
        sx={{ background: '#00a122', padding: '60px 0px' }}
      >
        <Container maxWidth="lg" sx={{ paddingBottom: '30px' }}>
          <p>
            Drug discovery is the first phase of pharmaceutical R&D. At this
            stage, therapeutic targets and their molecular mechanisms are
            identified, isolated, and characterized. If a target is demonstrated
            to have a functional role in the disease, a chemical lead with an
            affinity and selectivity for the target is identified and optimized.
            Researchers test whether the compound is “druggable” and can bind to
            the target by evaluating its pharmacokinetic profile, specifically
            in terms of absorption, metabolism, and excretion. The compound and
            additional drug components are then formulated to produce a
            bioavailable, stable dosage for a specific route administration.
          </p>
        </Container>

        <Card>
          <div id="fundingAgency" className="imageStyle">
            <Image
              src={Images.redDrugDiscovery}
              height="100"
              width="100"
              alt=""
            />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Funding Agency</b>: Governments may
              financially support early stage research through grant-providing
              agencies, such as Genome Canada or CIHR, or the NIH and NSF in the
              United States. The purpose of public funding agencies at this
              stage along the road is to provide capital for promising
              pre-competitive or fundamental research that the private market
              otherwise would not fund at such an early stage.
            </p>
          </div>
        </Card>

        <Card>
          <div id="TTO" className="imageStyle">
            <Image src={Images.redTTO} height="100" width="100" alt="" />
          </div>
          <div>
            <p className="black">
              <b className="bolder">TTO</b>: Technology Transfer Offices (TTOs)
              facilitate the protection and management of intellectual property
              (IP) produced at a particular institution (most often in academic
              institutions). In the drug discovery stage, they expedite the
              commercialization of IP by licensing, patenting, or helping to
              create spin-offs.{' '}
            </p>
          </div>
        </Card>

        <Card>
          <div id="humanCapital" className="imageStyle">
            <Image
              src={Images.redHumanCapital}
              height="100"
              width="100"
              alt=""
            />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Human Capital</b>: Human capital refers to
              the individual expertise and skills understood to be invaluable
              for a particular organization or endeavor. In the drug discovery
              stage, this refers to the institutional ability to hire and retain
              excellent scientists (including graduate students, post-doctoral
              researchers, faculty, and lab techs), as well as the ability to
              execute necessary non-scientific work (e.g. reviewing contracts
              and IP filings at TTOs). Human capital also includes human subject
              volunteers who participate in clinical trials.
            </p>
          </div>
        </Card>

        <Card>
          <div id="bureaucraticHurdles" className="imageStyle">
            <Image
              src={Images.redBeurocraticHurdles}
              width="60"
              height="60"
              alt=""
            />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Bureaucratic Hurdles</b>: Bureaucratic
              hurdles in the drug discovery stage include but are not limited to
              filing for human subjects approval, negotiating contracts,
              managing IP filings, and other organizational issues. Hurdles
              often occur at points of interaction between different
              stakeholders (e.g. scientists acquiring lab space within a
              university, research teams partnering with a contract research
              organization, TTOs mediating between research teams,
              administrative staff managing funding and research group members).
            </p>
          </div>
        </Card>

        <Card>
          <div id="basicScience" className="imageStyle">
            <Image
              src={Images.redBasicScience}
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div>
            <p className="black">
              <b className="bolder">Basic Science</b>: This broad term includes
              but is not limited to the scientific process of identifying
              targets, proof-of-concept studies, in vitro/in vivo testing,
              species selection, etc.
            </p>
          </div>
        </Card>

        <Card>
          <div id="dataSharing" className="imageStyle">
            <Image width="100" height="100" alt="" src={Images.shadedPylons} />
          </div>
          <div className="lastCard">
            <p className="black">
              <b className="bolder">Data Sharing</b>: Data sharing is critical
              in the pre-competitive stage, particularly in the context of rare
              diseases and pediatrics as there are limited patients and few
              trials and consequently less basic knowledge of diseases,
              pathways, and drugs. The competitive nature of academic publishing
              may create a reluctance among scientists to share data for fear of
              being scooped. Researchers may also encounter challenges to
              sharing data and know-how within the broader scientific community
              due to onerous legal agreements, and/or costly or nonexistent
              sharing platforms/infrastructure (e.g. contracts between CROs or
              industry partners, NDAs, proprietary sharing platforms and
              libraries).{' '}
            </p>
          </div>
        </Card>
      </Container>
      <GreenSpacer />
      <Footer />
    </>
  )
}
