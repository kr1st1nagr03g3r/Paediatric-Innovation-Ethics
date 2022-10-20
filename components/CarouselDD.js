import Images from '../public/images/01drugDiscovery/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import RedRoad from '../public/images/01drugDiscovery/redRoad.svg'
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'
import Clouds from '../components/Clouds'

const CarouselDD = () => {
  return (
    <div style={{ height: '490px' }}>
      <Clouds />

      <span className={styles.title}>
        <div className={styles.DDdot}> </div>
        <h2 className={styles.h2}>Drug Discovery</h2>
      </span>

      {/* BARRIERS */}
      <div className={styles.imagesTop}>
        <Link href="#fundingAgency">
          <Image src={Images.redDrugDiscovery} alt="" />
        </Link>

        <Link href="#TTO">
          <Image src={Images.redTTO} alt="" />
        </Link>
      </div>

      {/* ROADBLOCKS */}
      <div className={styles.imagesBottom}>
        <Link href="#humanCapital">
          <Image src={Images.shadedHumanCapital} alt="" />
        </Link>

        <Link href="#bureaucraticHurdles">
          <Image src={Images.shadedStopSign} alt="" />
        </Link>

        <Link href="#basicScience">
          <Image src={Images.shadedBasicScience} alt="" />
        </Link>

        <Link href="#dataSharing">
          <Image src={Images.shadedPylons} alt="" />
        </Link>
      </div>

      {/* ROAD */}

      <div className={styles.road}>
        <Image layout="fill" objectFit="cover" src={RedRoad} alt="" />
      </div>

      {/* ARROWS */}
      <div className={styles.arrows}>
        <Link href="/model-overview/manufacturing-distributing">
          <Image src={ArrowLeft} alt="" />
        </Link>
        <Link href="/model-overview/drug-discovery-pre-clinical">
          <Image src={ArrowRight} alt="" />
        </Link>
      </div>

      <div style={{ height: '265px', background: '#6AD6E4' }}></div>
      <div style={{ height: '150px', background: '#00A122' }}></div>
    </div>
  )
}

export default CarouselDD
