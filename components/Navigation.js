import React from 'react';
import styles from '../styles/Nav.module.css'
import Link from 'next/link'


class Navigation extends React.Component {
    state = {}
    render() {
        return (

            <div className={styles.navbar}>
            <div className={styles.logo}>
                <h1 className="text-[100px] font-bold text-white logo pr-[30px]">PBT</h1>
                </div>
            <div className={styles.navContent}>
                <Link href="/">HOME</Link>
                <Link href="/research">RESEARCH</Link>
                <div className={styles.dropdown}>
                    <Link href="/model-overview/drug-discovery" passHref>
                    <button className={styles.dropbtn}>MODEL OVERVIEW
                        <i className={styles.fa}>&nbsp;▼</i>
                    </button>
                    </Link>
                    <div className={styles.dropdowncontent}>
                        <Link href="/model-overview/drug-discovery">DRUG DISCOVERY</Link>
                        <Link href="/model-overview/drug-discovery-pre-clinical">DRUG DISCOVERY / PRE-CLINICAL</Link>
                        <Link href="/model-overview/pre-clinical">PRE-CLINICAL</Link>
                        <Link href="/model-overview/ind">IND</Link>
                        <Link href="/model-overview/clinical-trials">CLINICAL TRIALS</Link>
                        <Link href="/model-overview/nda">NDA</Link>
                        <Link href="/model-overview/manufacturing-distributing">MANUFACTURING AND DISTRIBUTING</Link>
                    </div>
                </div>
                <Link href="/contact">CONTACT</Link>
                </div>
            </div>


        );
    }
}


export default Navigation;