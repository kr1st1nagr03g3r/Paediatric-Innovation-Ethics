import React from 'react'
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer'
import CarouselCT from '../../components/CarouselCT'
import Card from '../../components/Card'
import Images from '../../public/images/05clinicalTrials/index.js'
import Container from '@mui/material/Container'
const ClinicalTrials = () => {
  return (
    <>
      <style jsx>{`
        .imageStyle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 300px;
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
      <CarouselCT />
      <div>
        <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
          <p className="containerGlobal text-center px-[50px] py-[60px]">
            Clinical trials involve testing new drugs in human volunteers to
            evaluate their safety and efficacy. Trials typically involve safety
            and dosage testing (Phase I), efficacy and optimal dosing in a
            larger patient group (Phase II), and safety and efficacy testing at
            commercial scale (Phase III). In P3 trials, patients are randomly
            assigned to receive either the drug being tested or to a control
            group where they receive the current standard of care treatment or a
            placebo. This is to provide additional safety data and to determine
            if the drug offers better treatment than what is available.
            Researchers monitor participants to determine the precise dosage
            regimen, how the drug is metabolized, and its acute side effects at
            all phases. Importantly, in the context of developing new drugs for
            pediatrics and rare diseases, P1 and P2 trials may happen
            concurrently, and often will not include P3 trials given the
            typically small target populations.{' '}
          </p>
        </div>
      </div>

      <Card>
        <div
          id="AMC"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTAMC} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Academic Medical Centers</b>: Human trials are
            typically undertaken at hospitals in research centers. Although
            clinical trials are considered primarily research and conducted by
            researchers, they are dependent upon hospital resources and
            infrastructure, such as nursing support, pharmacy support, and
            clinic space. Studies are sometimes investigator-initiated but can
            often supported or sponsored by industry partners.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="regagency"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTRegA} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Regulatory Agency</b>: Regulatory agencies
            oversee clinical trials to ensure they are conducted safely and
            ethically. They will also provide feedback with regards to trial
            design and execution. Institutional research ethics boards and other
            entities monitor (animal and human) safety, in particular, in the
            case of serious adverse events.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="industry"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTIndustry} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Industry</b>: Often (but not always)
            throughout clinical trials, industry will partner with an academic
            research group or a small start-up firm to help move a new drug
            candidate into clinical use. This is due in part to the prohibitive
            costs associated with executing clinical trials and the need for
            multi-centred trials to enroll a sufficient number of subjects. They
            also offer human capital to help run studies, collect data, and
            ensure research procedures are followed and regulations/ethical
            guidelines are met.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="CRO"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTCRO} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">CRO</b>: At this stage, CROs may be involved
            in designing and executing trials on behalf of industry partners, as
            well as data analysis, regulatory affairs management, and data
            analysis.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="humancapital"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTHumanCapital} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Human Capital</b>: Barriers related to human
            capital throughout clinical trials include challenges associated
            with finding researchers, clinicians, and administrative staff to
            run the trials themselves. Finding patients to participate in trials
            may also prove challenging, especially in the context of rare
            diseases; funding traveling patients is costly given that trials
            often occur in large urban centers.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="funding"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTFundingCap} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Funding / Capital</b>: Clinical trials are
            expensive and typically cost upwards of $250 million USD from P1
            through P3. Sourcing capital from public and private firms/sponsors
            (e.g. public funding agencies, philanthropic foundations, venture
            capital funds etc.) is a significant challenge. Travel and per diem
            costs for families of participants can also be significant.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="bhurdles"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTBHurdles} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Bureaucratic Hurdles</b>: There are a number
            of bureaucratic hurdles faced by developers at this stage, including
            but not limited to executing research contracts, meeting
            institutional ethics and regulatory requirements, and enrolling
            patients to ensure an adequate sample size.
          </p>
        </div>
      </Card>

      <Card>
        <div
          id="RDHurdles"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTRDHurdles} height="100" width="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">R&D Hurdles</b>: There are numerous scientific
            challenges faced throughout human clinical trials, including but not
            limited to undertaking reproductive toxicology and carcinogenicity
            testing, and scaling up from P1 to P2 to P3. Trial failures, where a
            drug may prove to be toxic or ineffective for a specific indication,
            are a common barrier faced at all stages of clinical trials.
          </p>
        </div>
      </Card>

      <CardLast>
        <div
          id="data"
          className="basis-1/4 justify-center align-center content-center flex"
        >
          <Image src={Images.CTDataSharing} width="100" height="100" alt="" />
        </div>
        <div className="basis-3/4">
          <p>
            <b className="bolder">Data Sharing</b>: Issues surrounding data
            sharing present another barrier in the clinical trial stage. This is
            particularly acute in the case of public/private partnerships, and
            when human subjects are involved in research, as privacy and
            confidentiality are essential.
          </p>
        </div>
      </CardLast>

      <GreenSpacer />
      <Footer />
    </>
  )
}

export default ClinicalTrials
