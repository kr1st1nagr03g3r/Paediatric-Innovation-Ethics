import * as React from 'react'
import MenuUnstyled from '@mui/base/MenuUnstyled'
import MenuItemUnstyled, {
  menuItemUnstyledClasses,
} from '@mui/base/MenuItemUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Logo from './Logo'
import Container from '@mui/material/Container'
import { useState } from 'react'

const ToggleHiddenText = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <style jsx>{`
        .content {
          font-size: 16px;
          color: ghostwhite;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          letter-spacing: 2px;
          font-weight: bold;
        }
        .navDropdown {
          background: #2f2f2f;
        }

        .dropdownItem {
          position: absolute;
          background: pink;
          top: 100px;
          display: flex;
          flex-direction: column;
          position: absolute;
          margin-top: 30px;
          border-radius: 50px;
          z-index: 10;
          padding: 20px;
        }
        .dropdownContainer {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        button {
          background: none;
          border: none;
          font-family: 'Nunito';
          padding: 0px;
        }
      `}</style>
      <section>
        <div className="content">
          <div className="dropdownContainer">
            <div onClick={() => setShow(!show)}>
              <button className="navDropdown">
                <Link href="">MODEL OVERVIEW</Link>
              </button>
            </div>
            {show ? null : (
              <div className="dropdownItem">
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
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default function Navigation() {
  return (
    <Container maxWidth={false}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navContent}>
          <Link href="/">HOME</Link>
          <Link href="/research">RESEARCH</Link>
          {/* DROPDOWN START */}
          <ToggleHiddenText />
          {/* DROPDOWN END */}
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </Container>
  )
}

//  <Link href="/contact">Hello</Link>
