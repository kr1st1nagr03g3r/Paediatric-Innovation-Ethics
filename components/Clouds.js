import React from 'react'
import Image from 'next/image'
import styles from '../styles/Carousel.module.css'
import Images from '../public/images/clouds/index.js'
import { Container } from '@mui/system'

const Clouds = () => {
  return (
    <Container>
      <div className={styles.cloudWrapper}>
        <div className={styles.cloud01}>
          <Image
            className={styles.cloud}
            alt=""
            layout="fill"
            src={Images.cloud01}
          />
        </div>

        <div className={styles.cloud02}>
          <Image
            className={styles.cloud}
            alt=""
            layout="fill"
            src={Images.cloud02}
          />
        </div>

        <div className={styles.cloud03}>
          <Image
            className={styles.cloud}
            alt=""
            layout="fill"
            src={Images.cloud03}
          />
        </div>
        <div className={styles.cloud04}>
          <Image
            className={styles.cloud}
            alt=""
            layout="fill"
            src={Images.cloud04}
          />
        </div>
        <div className={styles.cloud05}>
          <Image
            className={styles.cloud}
            alt=""
            layout="fill"
            src={Images.cloud05}
          />
        </div>
      </div>
    </Container>
  )
}

export default Clouds
