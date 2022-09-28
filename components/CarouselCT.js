import Images from '../public/images/05clinicalTrials/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'
import Clouds from './Clouds'


const CarouselDDPC = () => {
    return (

        <div style={{ height: '490px' }}>

            <Clouds />

            <span className={styles.title}>
                <div className={styles.CTdot}>  </div>
                <h2 className={styles.h2}>Clinical Trials</h2>
            </span>


            {/* BARRIERS */}
            <div className={styles.imagesTopCT}>





                <div>
                    <h2 className={styles.phases}>P1</h2>
                    <Link href="#AMC">
                        <Image src={Images.CTAMC} alt="" />
                    </Link>
                </div>

                <div>
                    <h2 className={styles.phases}>P2</h2>
                    <Link href="#regagency">
                        <Image src={Images.CTRegA} alt="" />
                    </Link>
                </div>
                <div>
                    <h2 className={styles.phases}></h2>
                    <Link href="#industry">
                        <Image src={Images.CTIndustry} alt="" />
                    </Link>
                </div>
                <div>
                    <h2 className={styles.phases}>P3</h2>
                    <Link href="#CRO">
                        <Image src={Images.CTCRO} alt="" />
                    </Link>
                </div>

            </div>

            {/* ROADBLOCKS */}
            <div className={styles.imagesBottom}>

                <Link href="#humancapital">
                    <Image src={Images.CTHumanCapital} alt="" />
                </Link>

                <Link href="#funding">
                    <Image src={Images.CTFundingCap} alt="" />
                </Link>

                <Link href="#bhurdles">
                    <Image src={Images.CTBHurdles} alt="" />
                </Link>

                <Link href="#RDHurdles">
                    <Image src={Images.CTRDHurdles} alt="" />
                </Link>

                <Link href="#data">
                    <Image src={Images.CTDataSharing} alt="" />
                </Link>


            </div>



            {/* ROAD */}

            <div className={styles.road}>
                <Image layout="fill" objectFit="cover" src={Images.CTRoad} alt="" />
            </div>




            {/* ARROWS */}
            <div className={styles.arrows}>
                <Link href="/model-overview/ind">
                    <Image src={ArrowLeft} alt="" />
                </Link>
                <Link href="/model-overview/nda">
                    <Image src={ArrowRight} alt="" />
                </Link>
            </div>








            <div style={{ height: '265px', background: '#6AD6E4' }}></div>
            <div style={{ height: '150px', background: '#00A122' }}></div>




        </div>

    )
}

export default CarouselDDPC