import React from 'react'
import Image from 'next/image'
import styles from '../styles/Carousel.module.css'

const Clouds = () => {
    return (
        <div className={styles.cloud}>
            <div className={styles.cloud01}>
                <Image className={styles.cloud} alt="" height="100" width="100" src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/bdbccf87a3cf18ba1666ce2cf83eff096d064a7d/cloud_01.svg" />
            </div>
            <div className={styles.cloud02}>
                <Image className={styles.cloud} alt="" height="100" width="100"  src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/0c464d309caf09d9c49e2673d9e0d4907bdf5674/cloud_02.svg" />
            </div>
            <div className={styles.cloud03}>
                <Image className={styles.cloud} alt="" height="100" width="100"  src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/0c464d309caf09d9c49e2673d9e0d4907bdf5674/cloud_03.svg" />
            </div>
            <div className={styles.cloud04}>
                <Image className={styles.cloud} alt="" height="100" width="100"  src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/0c464d309caf09d9c49e2673d9e0d4907bdf5674/cloud_04.svg" />
            </div>
            <div className={styles.cloud05}>
                <Image className={styles.cloud} alt="" height="100" width="100" src="https://raw.githubusercontent.com/kr1st1nagr03g3r/image-dump/0c464d309caf09d9c49e2673d9e0d4907bdf5674/cloud_02.svg" />
            </div>
        </div>
    )
}

export default Clouds