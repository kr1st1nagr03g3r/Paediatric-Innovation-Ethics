import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css'


class Navigation extends React.Component {
    state = {}
    render() {
        return (
            <div className={styles.bar}>
                <div className={styles.logo}><Link href="#">PBT</Link></div>
                <div className={styles.link}><Link href="#">HOME</Link></div>
                <div className={styles.link}><Link href="#">RESEARCH</Link></div>
                <details closed>
                    <summary>
                        MODEL OVERVIEW&nbsp;
                    </summary>
                    <div className={styles.detaillink}>
                        <span className={styles.span}><Link href="#">DRUG DISCOVERY</Link></span>
                        <span className={styles.span}><Link href="#">DRUG DISCOVERY / PRE-CLINICAL</Link></span>
                        <span className={styles.span}><Link href="#">PRE-CLINICAL</Link></span>
                        <span className={styles.span}><Link href="#">IND</Link></span>
                        <span className={styles.span}><Link href="#">CLINICAL TRIALS</Link></span>
                        <span className={styles.span}><Link href="#">NDA</Link></span>
                        <span className={styles.span}><Link href="#">MANUFACTURING AND DISTRIBUTING</Link></span>
                    </div>
                </details>
                <div className={styles.link}><Link href="#">CONTACT</Link></div>
            </div>

        );
    }
}


export default Navigation;