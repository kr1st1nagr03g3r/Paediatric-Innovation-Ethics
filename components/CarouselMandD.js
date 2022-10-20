import Images from '../public/images/07MandD/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'
import Clouds from '../components/Clouds'
import { BackToTop } from 'material-ui-back-to-top'

const ManufacturingDistributing = () => {
  return (
    <>
      <div style={{ height: '490px' }}>
        <Clouds />

        <div className={styles.titleSpecial}>
          <span className={styles.title}>
            <div className={styles.MandDDot}> </div>
            <h2 className={styles.h2}>Manufacturing and Distributing</h2>
          </span>
        </div>
        {/* BARRIERS */}
        <div className={styles.imagesTop}>
          <Link href="#MandDIndustry">
            <Image src={Images.MandDIndustry} alt="" />
          </Link>

          <Link href="#MandDRegA">
            <Image src={Images.MandDRegA} alt="" />
          </Link>

          <Link href="#MandDInsurance">
            <Image src={Images.MandDInsurance} alt="" />
          </Link>

          {/* <div className="next">
          <Image src={Images.ghostUniversity} alt="" />
        </div> */}
        </div>

        {/* ROADBLOCKS */}
        <div className={styles.imagesBottomMandD}>
          <Link href="#MandDCrack">
            <Image src={Images.MandDCrack} alt="" />
          </Link>

          <Link href="#MandDBHurdles">
            <Image src={Images.MandDBHurdles} alt="" />
          </Link>

          <Link href="#MandDCost">
            <Image src={Images.MandDCost} alt="" />
          </Link>
        </div>

        {/* ROAD */}

        <div className={styles.road}>
          <Image
            layout="fill"
            objectFit="cover"
            src={Images.MandDRoad}
            alt=""
          />
        </div>

        {/* ARROWS */}
        <div className={styles.arrows}>
          <Link href="/model-overview/nda">
            <Image src={ArrowLeft} alt="" />
          </Link>
          <Link href="/model-overview/drug-discovery">
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

export default ManufacturingDistributing
