import Images from '../public/images/02drugDiscoveryPreClinical/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'
import Clouds from '../components/Clouds'


const CarouselDDPC = () => {
    return (

        <div style={{ height: '490px' }}>

            <Clouds />

            <span className={styles.title}>
                <div className={styles.DDPCdot}>  </div>
                <h2 className={styles.h2}>Drug Discovery / Pre-Clinical</h2>
            </span>


            {/* BARRIERS */}
            <div className={styles.imagesTop}>
                <Link href="#Uni">
                    <Image src={Images.DDPCUni} alt="" />
                </Link>

                <Link href="#RegA">
                    <Image src={Images.DDPCRegAgency} alt="" />
                </Link>

                <Link href="#CRO">
                    <Image src={Images.DDPCCRO} alt="" />
                </Link>





            </div>

            {/* ROADBLOCKS */}
            <div className={styles.imagesBottom}>

                <Link href="#Research">
                    <Image src={Images.DDPCResearchTranslation} alt="" />
                </Link>

                <Link href="#HumanCapital">
                    <Image src={Images.DDPCHumanCapital} alt="" />
                </Link>

                <Link href="#BHurdles">
                    <Image src={Images.DDPCBHurdles} alt="" />
                </Link>

                <Link href="#BasicScience">
                    <Image src={Images.DDPCBasicScience} alt="" />
                </Link>

                <Link href="#DataSharing">
                    <Image src={Images.DDPCDataSharing} alt="" />
                </Link>










            </div>



            {/* ROAD */}

            <div className={styles.road}>
                <Image layout="fill" objectFit="cover" src={Images.DDPCRoad} alt="" />
            </div>




            {/* ARROWS */}
            <div className={styles.arrows}>
                <Link href="/model-overview/drug-discovery">
                    <Image src={ArrowLeft} alt="" />
                </Link>
                <Link href="/model-overview/pre-clinical">
                    <Image src={ArrowRight} alt="" />
                </Link>


            </div>








            <div style={{ height: '265px', background: '#6AD6E4' }}></div>
            <div style={{ height: '150px', background: '#00A122' }}></div>




        </div>

    )
}

export default CarouselDDPC