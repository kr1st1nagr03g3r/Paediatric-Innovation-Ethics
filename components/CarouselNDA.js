import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'
import Clouds from './Clouds'
import NDAbHurdles from "../public/images/06NDA/NDAregAgency.svg"
import NDAregAgency from "../public/images/06NDA/NDAbHurdles.svg"
import NDARoad from "../public/images/06NDA/NDARoad.svg"


const CarouselNDA = () => {
    return (

        // <div style={{ height: '490px' }}>

        //     <Clouds />

        //     <span className={styles.title}>
        //         <div className={styles.NDAdot}>  </div>
        //         <h2 className={styles.h2}>NDA</h2>
        //     </span>

        //     {/* BARRIERS */}
        //     <div className={styles.imagesTopCT}>
        //         <div>
        //             <h2 className={styles.phases}>P1</h2>
        //             <Link href="#AMC">
        //                 <Image src={NDAregAgency} alt="" />
        //             </Link>
        //         </div>

        //         {/* ROADBLOCKS */}
        //         <div className={styles.imagesBottom}>

        //             <Link href="#humancapital">
        //                 <Image src={NDAbHurdles} alt="" />
        //             </Link>
        //         </div>

        //         {/* ROAD */}

        //         <div className={styles.road}>
        //             <Image layout="fill" objectFit="cover" src={NDARoad} alt="" />
        //         </div>


        //         {/* ARROWS */}
        //         <div className={styles.arrows}>
        //             <Link href="/model-overview/clinical-trials">
        //                 <Image src={ArrowLeft} alt="" />
        //             </Link>
        //             <Link href="/model-overview/manufacturing-distributing">
        //                 <Image src={ArrowRight} alt="" />
        //             </Link>


        //         </div>




        //     </div>
        //     <div style={{ height: '265px', background: '#6AD6E4' }}></div>
        //     <div style={{ height: '150px', background: '#00A122' }}></div>
        // </div>

        <div style={{ height: '490px' }}>

            <Clouds />

            <span className={styles.title}>
                <div className={styles.NDAdot}>  </div>
                <h2 className={styles.h2}>NDA</h2>
            </span>

            {/* BARRIERS */}
            <div className={styles.imagesTop}>
                <Link href="#regAgency">

                    <Image src={NDAbHurdles} alt="" />
                </Link>

            </div>

            {/* ROADBLOCKS */}
            <div className={styles.imagesBottom}>
                <Link href="#NDAHurdles">
                    <Image src={NDAregAgency} alt="" />
                </Link>

            </div>



            {/* ROAD */}

            <div className={styles.road}>
                <Image layout="fill" objectFit="cover" src={NDARoad} alt="" />
            </div>




            {/* ARROWS */}
            <div className={styles.arrows}>
                <Link href="/model-overview/clinical-trials">
                    <Image src={ArrowLeft} alt="" />
                </Link>
                <Link href="/model-overview/manufacturing-distributing">
                    <Image src={ArrowRight} alt="" />
                </Link>


            </div>







            <div style={{ height: '265px', background: '#6AD6E4' }}></div>
            <div style={{ height: '150px', background: '#00A122' }}></div>




        </div>

    )
};

export default CarouselNDA




