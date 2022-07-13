import Images from '../public/images/01drugDiscovery/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import RedRoad from '../public/images/01drugDiscovery/redRoad.svg'
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'


const CarouselDD = () => {
  return (

    <div style={{ height: '450px' }}>




      {/* IMAGES */}
      <div className={styles.imagesAll}>
        <Image src={Images.redFundingAgency} alt="" />
        <Image src={Images.redTTO} alt="" />
      </div>

      {/* ROAD */}

      <div className={styles.road}>
        <Image layout="fill" objectFit="cover" src={RedRoad} alt="" />
      </div>




      {/* ARROWS */}
      <div className={styles.arrows}>
        <Link href="https://checkboxrace.com/">
          <Image src={ArrowLeft} alt="" />
        </Link>
        <Link href="https://checkboxrace.com/">
          <Image src={ArrowRight} alt="" />
        </Link>
      </div>






      <div style={{ height: '265px', background: '#6AD6E4' }}></div>
      <div style={{ height: '110px', background: '#00A122' }}></div>




    </div>

  )
}

export default CarouselDD