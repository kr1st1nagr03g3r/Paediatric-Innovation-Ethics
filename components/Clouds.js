import React from 'react'
import Image from 'next/image'
import styles from '../styles/Carousel.module.css'
import Images from "../public/images/clouds/index.js"

const Clouds = () => {
    return (
        <div className={styles.cloud}>
            <div className={styles.cloud01}>
                <Image className={styles.cloud} alt="" height="100" width="100" src={Images.cloud01} />
            </div>
            <div className={styles.cloud02}>
                <Image className={styles.cloud} alt="" height="100" width="100" src={Images.cloud02} />
            </div>
            <div className={styles.cloud03}>
                <Image className={styles.cloud} alt="" height="100" width="100" src={Images.cloud03} />
            </div>
            <div className={styles.cloud04}>
                <Image className={styles.cloud} alt="" height="100" width="100" src={Images.cloud04} />
            </div>
            <div className={styles.cloud05}>
                <Image className={styles.cloud} alt="" height="100" width="100" src={Images.cloud05} />
            </div>
        </div>
    )
}

export default Clouds