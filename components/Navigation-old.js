import React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Logo from './Logo'
import Container from '@mui/material/Container'

export default function Navigation() {
  return (
    <>
      <Container maxWidth={false}>
        <div className={styles.navbar}>
          <Logo />
          <div className={styles.navContent}>
            <Link href="/">HOME</Link>
            <Link href="/research">RESEARCH</Link>
            <div className={styles.dropdown}>
              <Link href="/model-overview" passHref>
                <button className={styles.dropbtn}>
                  MODEL OVERVIEW
                  <span className={styles.fa}>&nbsp;▼</span>
                </button>
              </Link>
              <div className={styles.dropdowncontent}>
                <Link href="/model-overview/drug-discovery">
                  DRUG DISCOVERY
                </Link>
                <Link href="/model-overview/drug-discovery-pre-clinical">
                  DRUG DISCOVERY / PRE-CLINICAL
                </Link>
                <Link href="/model-overview/pre-clinical">PRE-CLINICAL</Link>
                <Link href="/model-overview/ind">IND</Link>
                <Link href="/model-overview/clinical-trials">
                  CLINICAL TRIALS
                </Link>
                <Link href="/model-overview/nda">NDA</Link>
                <Link href="/model-overview/manufacturing-distributing">
                  MANUFACTURING AND DISTRIBUTING
                </Link>
              </div>
            </div>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </Container>
    </>
  )
}
