import Container from '@mui/material/Container'
import Image from 'next/image'
import Images from '../public/images/research/index'
import Monkey from './tooltips/Monkey'
// IMAGES
import redHumanCapital from '../public/images/01drugDiscovery/redHumanCapital.svg'
import redBeurocraticHurdles from '../public/images/01drugDiscovery/redBeurocraticHurdles.svg'
import DDPCBHurdles from '../public/images/02drugDiscoveryPreClinical/DDPCBHurdles.svg'
import DDPCHumanCapital from '../public/images/02drugDiscoveryPreClinical/DDPCHumanCapital.svg'
import PCBHurdles from '../public/images/03preClinical/PCBHurdles.svg'
import INDBHurdles from '../public/images/04IND/INDBHurdles.svg'
import NDAbHurdles from '../public/images/06NDA/NDAbHurdles.svg'
import CTHumanCapital from '../public/images/05clinicalTrials/CTHumanCapital.svg'
import CTBHurdles from '../public/images/05clinicalTrials/CTBHurdles.svg'
import CTRDHurdles from '../public/images/05clinicalTrials/CTRDHurdles.svg'
import MandDCrack from '../public/images/07MandD/MandDCrack.svg'
import MandDBHurdles from '../public/images/07MandD/MandDBHurdles.svg'

// REUSEABLE IMAGES:

// PYLONS
import redDataSharingPylons from '../public/images/01drugDiscovery/redDataSharingPylons.svg'
// ROCK
import DDPCResearchTranslation from '../public/images/02drugDiscoveryPreClinical/DDPCResearchTranslation.svg'
// COP CAR
import redBasicScience from '../public/images/01drugDiscovery/redBasicScience.svg'
//MONEY
import money from '../public/images/money.svg'

export default function Buildings() {
  return (
    <>
      <style jsx>
        {`
          .parent {
            position: relative;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: row;
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
          </div>
          <div className="absolute ">
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
              giraffeThree={{
                tooltipColour: 'tt03',
                title: 'Basic Science',
                description:
                  'This broad term includes but is not limited to the scientific process of identifying targets, proof-of-concept studies, in vitro/in vivo testing, species selection, etc.',
                link: '/model-overview/drug-discovery',
                icon: redBasicScience,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeFour={{
                tooltipColour: 'tt04',
                title: 'Data Sharing',
                description:
                  'Data sharing is critical in the pre-competitive stage, particularly in the context of rare diseases and pediatrics as there are limited patients and few trials and consequently less basic knowledge of diseases, pathways, and drugs. The competitive nature of academic publishing may create a reluctance among scientists to share data for fear of being scooped. Researchers may also encounter challenges to sharing data and know-how within the broader scientific community due to onerous legal agreements, and/or costly or nonexistent sharing platforms/infrastructure (e.g. contracts between CROs or industry partners, NDAs, proprietary sharing platforms and libraries).',
                link: '/model-overview/drug-discovery',
                icon: redDataSharingPylons,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeFive={{
                tooltipColour: 'tt05',
                title: 'Research Translation',
                description:
                  'Translating benchwork to animal studies is another hurdle faced by researchers at this stage. Before human trials can begin, ideas from the earliest phase of drug discovery must be translated successfully into animal studies to test the proof of principal in vivo.',
                link: '/model-overview/drug-discovery-pre-clinical',
                icon: DDPCResearchTranslation,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeSix={{
                tooltipColour: 'tt06',
                title: 'Human Capital',
                description:
                  'Human capital refers to the individual expertise and skills understood to be invaluable for a particular organization or endeavor. In the drug discovery stage, this refers to the institutional ability to hire and retain excellent scientists (including graduate students, post-doctoral researchers, faculty, and lab techs), as well as the ability to execute necessary non-scientific work (e.g. reviewing contracts and IP filings at TTOs). Human capital also includes human subject volunteers who participate in clinical trials.',
                link: '/model-overview/drug-discovery-pre-clinical',
                icon: DDPCHumanCapital,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeSeven={{
                tooltipColour: 'tt07',
                title: 'Bureaucratic Hurdles',
                description:
                  'Bureaucratic hurdles in the drug discovery stage include but are not limited to filing for human subjects approval, negotiating contracts, managing IP filings, and other organizational issues. Hurdles often occur at points of interaction between different stakeholders (e.g. scientists acquiring lab space within a university, research teams partnering with a contract research organization, TTOs mediating between research teams, administrative staff managing funding and research group members).',
                link: '/model-overview/drug-discovery-pre-clinical',
                icon: DDPCBHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeEight={{
                tooltipColour: 'tt08',
                title: 'Basic Science',
                description:
                  'This broad term encompasses includes but is not limited to the scientific process of identifying targets, proof-of-concept studies, in vitro/in vivo testing, species selection, etc.',
                link: '/model-overview/drug-discovery-pre-clinical',
                icon: redBasicScience,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeNine={{
                tooltipColour: 'tt09',
                title: 'Data Sharing',
                description:
                  'Data sharing is critical in the pre-competitive stage, particularly in the context of rare diseases and pediatrics as there are limited patients and few trials and consequently less basic knowledge of diseases, pathways, and drugs. The competitive nature of academic publishing may create a reluctance among scientists to share data for fear of being scooped. Researchers may also encounter challenges to sharing data and know-how within the broader scientific community due to onerous legal agreements, and/or costly or nonexistent sharing platforms/infrastructure (e.g. contracts between CROs or industry partners, NDAs, proprietary sharing platforms and libraries).',
                link: '/model-overview/drug-discovery-pre-clinical',
                icon: redDataSharingPylons,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeTen={{
                tooltipColour: 'tt10',
                title: 'Bureaucratic Hurdles',
                description:
                  'Bureaucratic hurdles in the drug discovery stage include but are not limited to filing for human subjects, IRB approval, negotiating contracts, managing IP filings, and other organizational issues. Hurdles often occur at points of interaction between different stakeholders (e.g. scientists acquiring lab space within a university, research teams partnering with a contract research organization, TTOs mediating between research teams, administrative staff managing funding and research group members).',
                link: '/model-overview/pre-clinical',
                icon: PCBHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeEleven={{
                tooltipColour: 'tt11',
                title: 'Research Translation',
                description:
                  'Translating benchwork to animal studies is another hurdle faced by researchers at this stage. Before human trials can begin, ideas from the earliest phase of drug discovery must be translated successfully into animal studies to test the proof of principal in vivo.',
                link: '/model-overview/pre-clinical',
                icon: DDPCResearchTranslation,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeTwelve={{
                tooltipColour: 'tt12',
                title: 'Bureaucratic Hurdles',
                description:
                  'Regulatory compliance in and of itself presents a barrier for developers, simply given the sheer volume of data required by regulatory agencies prior to moving on to human trials.',
                link: '/model-overview/ind',
                icon: INDBHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeThirteen={{
                tooltipColour: 'tt13',
                title: 'Human Capital',
                description:
                  'Barriers related to human capital throughout clinical trials include challenges associated with finding researchers, clinicians, and administrative staff to run the trials themselves. Finding patients to participate in trials may also prove challenging, especially in the context of rare diseases; funding traveling patients is costly given that trials often occur in large urban centers.',
                link: '/model-overview/clinical-trials',
                icon: CTHumanCapital,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeFourteen={{
                tooltipColour: 'tt14',
                title: 'Funding and Capital',
                description:
                  'Clinical trials are expensive and typically cost upwards of $250 million USD from P1 through P3. Sourcing capital from public and private firms/sponsors (e.g. public funding agencies, philanthropic foundations, venture capital funds etc.) is a significant challenge. Travel and per diem costs for families of participants can also be significant.',
                link: '/model-overview/clinical-trials',
                icon: money,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeFifteen={{
                tooltipColour: 'tt15',
                title: 'Bureaucratic Hurdles',
                description:
                  'There are a number of bureaucratic hurdles faced by developers at this stage, including but not limited to executing research contracts, meeting institutional ethics and regulatory requirements, and enrolling patients to ensure an adequate sample size.',
                link: '/model-overview/clinical-trials',
                icon: CTBHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeSixteen={{
                tooltipColour: 'tt16',
                title: 'R and D Hurdles',
                description:
                  'There are numerous scientific challenges faced throughout human clinical trials, including but not limited to undertaking reproductive toxicology and carcinogenicity testing, and scaling up from P1 to P2 to P3. Trial failures, where a drug may prove to be toxic or ineffective for a specific indication, are a common barrier faced at all stages of clinical trials.',
                link: '/model-overview/clinical-trials',
                icon: CTRDHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeSeventeen={{
                tooltipColour: 'tt17',
                title: 'Data Sharing',
                description:
                  'Issues surrounding data sharing present another barrier in the clinical trial stage. This is particularly acute in the case of public/private partnerships, and when human subjects are involved in research, as privacy and confidentiality are essential.',
                link: '/model-overview/clinical-trials',
                icon: redDataSharingPylons,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeEighteen={{
                tooltipColour: 'tt18',
                title: 'Bureaucratic Hurdles',
                description:
                  'Regulatory compliance in and of itself presents a barrier, simply given the sheer volume of data required by regulatory agencies to demonstrate the safety and efficacy of a drug for clinical use in humans.',
                link: '/model-overview/nda',
                icon: NDAbHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeNineteen={{
                tooltipColour: 'tt19',
                title: 'Manufacturing Infrastructure',
                description:
                  'Challenges associated with manufacturing a new drug include but are not limited to the high costs associated with commercial-scale production, the costs of ongoing testing and oversight, and the physical infrastructure needed to produce pharmaceuticals (e.g. the physical building space and equipment).',
                link: '/model-overview/manufacturing-distributing',
                icon: MandDCrack,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeTwenty={{
                tooltipColour: 'tt20',
                title: 'Bureaucratic Hurdles',
                description:
                  'Bureaucratic hurdles at this stage include ongoing regulatory compliance, and the management of IP (particularly as generics begin to be developed). Complying with regulatory standards, managing IP, and manufacturing and distributing a drug at commercial scale require significant funds, human capital, infrastructure, and time.',
                link: '/model-overview/manufacturing-distributing',
                icon: MandDBHurdles,
                alt: 'Bureaucratic Hurdles',
              }}
              giraffeTwentyOne={{
                tooltipColour: 'tt21',
                title: 'Cost and Reimbursement',
                description:
                  'These hurdles include costs for the drug in question, negotiating insurance coverage (in the US) and provincial drug reimbursement (in Canada). Drug reimbursement varies among provinces in Canada, as each province has its own formulary.',
                link: '/model-overview/manufacturing-distributing',
                icon: money,
                alt: 'Bureaucratic Hurdles',
              }}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
