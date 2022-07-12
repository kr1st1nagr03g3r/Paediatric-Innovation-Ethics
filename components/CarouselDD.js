import Images from '../public/images/01drugDiscovery/index.js'
import Image from 'next/image.js'
import styles from '/styles/Carousel.module.css'
import React from 'react'
import Link from 'next/link.js'
// images
import DDsubnav from '../public/images/01drugDiscovery/DDsubnav.svg'
import RedRoad from '../public/images/01drugDiscovery/redRoad.svg'
import ArrowLeft from '../public/images/arrowLeft.png'
import ArrowRight from '../public/images/arrowRight.png'

const CarouselDD = () => {
  return (
    <div className="w-full">
      <Image className={styles.hero} layout="responsive" src={DDsubnav} alt="" />
      <div className={styles.road}>
        <Image layout="responsive" src={RedRoad} alt="" />
      </div>
      <div className={styles.arrows}>
      <Link href="https://www.google.ca">
      <Image src={ArrowLeft} alt="" />
      </Link>
      <Image src={ArrowRight} alt="" />
      </div>
    </div>
  )
}

export default CarouselDD