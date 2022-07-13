import React from 'react';
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer';
import CarouselDDPC from '../../components/CarouselDDPC';
import Card from '../../components/Card'
import Images from '../../public/images/02drugDiscoveryPreClinical/index.js'

class PreClinical extends React.PureComponent {
    state = {}
    render() {
        return (

            <>
                <Navigation />
                <CarouselDDPC />
                <div>
                    <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
                        <p className="containerGlobal text-center px-[50px] py-[60px]">The pre-clinical stage evaluates the drug&apos;s safety and efficacy in non-human animals and extrapolates the results to prospective human outcomes. At this stage, in-vivo studies are conducted to understand optimal dosage, rates of metabolism and elimination, and the half-life of the drug. Toxicologic studies help to shed light on the drug’s potential toxicity. This stage involves regulatory oversight and approval to ensure that studies are conducted safely and ethically. </p>
                    </div>
                </div>

                <Card>
                    <div id="Uni" className="basis-1/4 justify-center align-center content-center flex" >
                        <Image src={ Images.DDPCUni } height="100" width="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">University</b>:  Universities are typically the primary sites of basic research of relevance to drug discovery. They may receive funding in the form of a grant from a funding agency or from industry, and may also partner with a CRO to conduct research.</p>
                    </div>
                </Card>

                <Card>
                    <div id="RegA" className="basis-1/4 justify-center align-center content-center flex" >
                        <Image src={ Images.DDPCRegAgency } height="100" width="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Regulatory Agency</b>:   During pre-clinical research, in-vivo trials regulatory agencies work with universities and CROs to ensure that future trials are conducted safely and ethically. </p>
                    </div>
                </Card>

                <Card>
                    <div id="CRO" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={ Images.DDPCCRO } height="100" width="100" alt="" /></div>
                    <div className="basis-3/4">
                        <p><b className="bolder">CRO</b>: Human capital refers to the individual expertise and skills understood to be invaluable for a particular organization or endeavor. In the drug discovery stage, this refers to the institutional ability to hire and retain excellent scientists (including graduate students, post-doctoral researchers, faculty, and lab techs), as well as the ability to execute necessary non-scientific work (e.g. reviewing contracts and IP filings at TTOs). Human capital also includes human subject volunteers who participate in clinical trials.</p>
                    </div>
                </Card>

                <Card>
                    <div id="Research" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={ Images.DDPCResearchTranslation } width="60" height="60" alt=""  />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Research Translation</b>: Translating benchwork to animal studies is another hurdle faced by researchers at this stage. Before human trials can begin, ideas from the earliest phase of drug discovery must be translated successfully into animal studies to test the proof of principal in vivo. 
                        </p>
                    </div>
                </Card>

                <Card>
                    <div id="HumanCapital" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={ Images.DDPCHumanCapital } width="100" height="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Human Capital</b>: Human capital refers to the individual expertise and skills understood to be invaluable for a particular organization or endeavor. In the drug discovery stage, this refers to the institutional ability to hire and retain excellent scientists (including graduate students, post-doctoral researchers, faculty, and lab techs), as well as the ability to execute necessary non-scientific work (e.g. reviewing contracts and IP filings at TTOs). Human capital also includes human subject volunteers who participate in clinical trials.</p>
                    </div>
                </Card>

                <Card>
                    <div id="BHurdles" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={ Images.DDPCBHurdles } width="100" height="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Bureaucratic Hurdles</b>: Bureaucratic hurdles in the drug discovery stage include but are not limited to filing for human subjects approval, negotiating contracts, managing IP filings, and other organizational issues. Hurdles often occur at points of interaction between different stakeholders (e.g. scientists acquiring lab space within a university, research teams partnering with a contract research organization, TTOs mediating between research teams, administrative staff managing funding and research group members). </p>
                    </div>
                </Card>



                <Card>
                    <div id="BasicScience" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={ Images.DDPCBasicScience } width="100" height="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Basic Science</b>: This broad term encompasses includes but is not limited to the scientific process of identifying targets, proof-of-concept studies, in vitro/in vivo testing, species selection, etc.</p>
                    </div>
                </Card>

                <CardLast>
                    <div id="DataSharing" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={Images.DDPCDataSharing} width="100" height="100" alt=""  />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Data Sharing</b>: Data sharing is critical in the pre-competitive stage, particularly in the context of rare diseases and pediatrics as there are limited patients and few trials and consequently less basic knowledge of diseases, pathways, and drugs. The competitive nature of academic publishing may create a reluctance among scientists to share data for fear of being scooped. Researchers may also encounter challenges to sharing data and know-how within the broader scientific community due to onerous legal agreements, and/or costly or nonexistent sharing platforms/infrastructure (e.g. contracts between CROs or industry partners, NDAs, proprietary sharing platforms and libraries). </p>
                    </div>
                </CardLast>



                <GreenSpacer />
                <Footer />
            </>

        );
    }
}

export default PreClinical;