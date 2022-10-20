import Images from '../public/images/03preClinical/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'
import Clouds from '../components/Clouds'
import { BackToTop } from 'material-ui-back-to-top'

const CarouselDDPC = () => {
  return (
    <>
      <div style={{ height: '490px' }}>
        <Clouds />

        <span className={styles.title}>
          <div className={styles.PCdot}> </div>
          <h2 className={styles.h2}>Pre-Clinical</h2>
        </span>

        {/* BARRIERS */}
        <div className={styles.imagesTop}>
          <Link href="#CRO">
            <Image src={Images.PCCRO} alt="" />
          </Link>
        </div>

        {/* ROADBLOCKS */}
        <div className={styles.imagesBottom}>
          <Link href="#hurdles">
            <Image src={Images.PCBHurdles} alt="" />
          </Link>

          <Link href="#research">
            <Image src={Images.PCResearch} alt="" />
          </Link>
        </div>

        {/* ROAD */}

        <div className={styles.road}>
          <Image layout="fill" objectFit="cover" src={Images.PCRoad} alt="" />
        </div>

        {/* ARROWS */}
        <div className={styles.arrows}>
          <Link href="/model-overview/drug-discovery-pre-clinical">
            <Image src={ArrowLeft} alt="" />
          </Link>
          <Link href="/model-overview/ind">
            <Image src={ArrowRight} alt="" />
          </Link>
        </div>

        <div style={{ height: '265px', background: '#6AD6E4' }}></div>
        <div style={{ height: '150px', background: '#00A122' }}></div>
      </div>
      <BackToTop />
    </>
  )
}

export default CarouselDDPC
