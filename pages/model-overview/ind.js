import React from 'react';
import Navigation from '../../components/Navigation'
import Image from 'next/image'
import CardLast from '../../components/CardLast'
import Footer from '../../components/Footer'
import GreenSpacer from '../../components/GreenSpacer';
import CarouselIND from '../../components/CarouselIND';
import Card from '../../components/Card'
import Images from '../../public/images/04IND/index.js'

class PreClinical extends React.PureComponent {
    state = {}
    render() {
        return (

            <>
                <Navigation />
                <CarouselIND />
                <div>
                    <div className="bg-[#00a122] mt-[-10px] relative flex flex-col content-center px-0">
                        <p className="containerGlobal text-center px-[50px] py-[60px]">Prior to testing in humans, drug developers must file their Investigational New Drug (IND) application to their governing regulatory body. This IND application includes preclinical and toxicity study data, and drug manufacturing information. Clinical research protocols outlining selection criteria for trial participants, number of participants, duration of study, dose and administration route, and data collection and analysis are also included in the IND application.</p>
                    </div>
                </div>

                <Card>
                    <div id="regagency" className="basis-1/4 justify-center align-center content-center flex" >
                        <Image src={ Images.INDRegA } height="100" width="100" alt="" />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Regulatory Agency</b>:   At the IND stage, regulatory agencies review preclinical and toxicity study data previously completed, in addition to drug manufacturing information and clinical research protocols. </p>
                    </div>
                </Card>

    

                <CardLast>
                    <div id="research" className="basis-1/4 justify-center align-center content-center flex">
                        <Image src={Images.INDBHurdles} width="100" height="100" alt=""  />
                    </div>
                    <div className="basis-3/4">
                        <p><b className="bolder">Bureaucratic Hurdles</b>: Regulatory compliance in and of itself presents a barrier for developers, simply given the sheer volume of data required by regulatory agencies prior to moving on to human trials. </p>
                    </div>
                </CardLast>



                <GreenSpacer />
                <Footer />
            </>

        );
    }
}

export default PreClinical;