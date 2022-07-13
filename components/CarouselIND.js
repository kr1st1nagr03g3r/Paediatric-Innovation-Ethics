import Images from '../public/images/04IND/index.js'
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
                <div className={styles.INDdot}>  </div>
                <h2 className={styles.h2}>IND</h2>
            </span>


            {/* BARRIERS */}
            <div className={styles.imagesTop}>
                <Link href="#regagency">
                    <Image src={Images.INDRegA} alt="" />
                </Link>





            </div>

            {/* ROADBLOCKS */}
            <div className={styles.imagesBottom}>

                <Link href="#research">
                    <Image src={Images.INDBHurdles} alt="" />
                </Link>

  










            </div>



            {/* ROAD */}

            <div className={styles.road}>
                <Image layout="fill" objectFit="cover" src={Images.INDRoad} alt="" />
            </div>




            {/* ARROWS */}
            <div className={styles.arrows}>
                <Link href="/model-overview/pre-clinical">
                    <Image src={ArrowLeft} alt="" />
                </Link>
                <Link href="/model-overview/clinical-trials">
                    <Image src={ArrowRight} alt="" />
                </Link>


            </div>








            <div style={{ height: '265px', background: '#6AD6E4' }}></div>
            <div style={{ height: '150px', background: '#00A122' }}></div>




        </div>

    )
}

export default CarouselDDPC