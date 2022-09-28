import React from 'react';
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer';
import CarouselPC from '../../components/CarouselPC';
import Card from '../../components/Card'
import Images from '../../public/images/03preClinical/index.js'

class PreClinical extends React.PureComponent {
    state = {}
    render() {
        return (

            <>
                <Navigation />
                <CarouselPC />
                <div>
                    <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
                        <p className="containerGlobal text-center px-[50px] py-[60px]">The pre-clinical stage evaluates the drug&apos;s safety and efficacy in non-human animals and extrapolates the results to prospective human outcomes. At this stage, in-vivo studies are conducted to understand optimal dosage, rates of metabolism and elimination, and the half-life of the drug. Toxicologic studies help to shed light on the drug&apos;s potential toxicity. This stage involves regulatory oversight and approval to ensure that studies are conducted safely and ethically. </p>
                    </div>
                </div>

                <Card>
                    <div id="CRO" className="basis-1/4 justify-center align-center content-center flex" >
                        <Image src={Images.PCCRO} height="100" width="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p className="bolder">CRO:  In the pre-clinical stage, Contract Research Organizations (CROs) are contracted by universities to test new drug candidates prior to human testing. This typically includes compound synthesis and conducting animal studies.</p>
                    </div>
                </Card>

                <Card>
                    <div id="hurdles" className="basis-1/4 justify-center align-center content-center flex" >
                        <Image src={Images.PCBHurdles} height="100" width="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p className="bolder">Bureaucratic Hurdles: Bureaucratic hurdles in the drug discovery stage include but are not limited to filing for human subjects, IRB approval, negotiating contracts, managing IP filings, and other organizational issues. Hurdles often occur at points of interaction between different stakeholders (e.g. scientists acquiring lab space within a university, research teams partnering with a contract research organization, TTOs mediating between research teams, administrative staff managing funding and research group members). </p>
                    </div>
                </Card>

                <CardLast>
                    <div id="research" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={Images.PCResearch} width="100" height="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p className="bolder">Research Translation: Translating benchwork to animal studies is another hurdle faced by researchers at this stage. Before human trials can begin, ideas from the earliest phase of drug discovery must be translated successfully into animal studies to test the proof of principal in vivo. </p>
                    </div>
                </CardLast>



                <GreenSpacer />
                <Footer />
            </>

        );
    }
}

export default PreClinical;