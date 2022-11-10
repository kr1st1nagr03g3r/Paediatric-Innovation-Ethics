import * as React from 'react'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Logo from './Logo'
import Container from '@mui/material/Container'
import { useState } from 'react'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded'
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

// % Needed to italicize a Next Link
export function ModelOverviewLink() {
  return (
    <>
      <style jsx>{`
        i {
          text-align: center;
          font-family: 'Nunito', sans-serif;
          font-weight: 400;
          line-height: 1.5;
          color: ghostwhite;
          font-size: 18px;
          cursor: pointer;
        }
      `}</style>
      <Link href="/model-overview" passHref>
        <i>
          <p>MODEL OVERVIEW INFO</p>
        </i>
      </Link>
    </>
  )
}

// $ TOGGLE HIDDEN TEXT COMPONENT & ARROW TOGGLE
const ToggleHiddenText = () => {
  const [show, setShow] = useState(true)

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  return (
    <>
      <style jsx>{`
        .navDropdown {
        }
        .dropdownItem {
          position: absolute;
          background: #2f2f2f;
          box-shadow: #00000057 0 0 20px 6px;
          top: 100px;
          display: flex;
          flex-direction: column;
          position: absolute;
          margin-top: 30px;
          border-radius: 50px;
          z-index: 20;
          padding: 20px;
        }
        .dropdownContainer,
        .content {
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
        .arrowIcon {
          background: none;
          border: none;
          color: white;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      `}</style>
      <section>
        <div>
          <div className="dropdownContainer">
            <div
              onClick={() => setShow(!show)}
              className={styles.buttonWrapper}
            >
              <div className="content">
                <button onClick={handleToggle}>
                  {navbarOpen ? (
                    <div>
                      <span className="arrowIcon">
                        <Link href="">MODEL OVERVIEW</Link>
                        <ArrowDropDownRoundedIcon />
                      </span>
                    </div>
                  ) : (
                    <div>
                      <span className="arrowIcon">
                        <Link href="">MODEL OVERVIEW</Link>
                        <ArrowLeftRoundedIcon />
                      </span>
                    </div>
                  )}
                </button>
              </div>
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
                <ModelOverviewLink />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

// ^ HAMBURGER COMPONENT MOBILE 🍔
export function Hamburger() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }
  const [show, setShow] = useState(true)

  return (
    <>
      <style jsx>{`
        button {
          background: none;
          color: ghostwhite;
          border: none;
          font-family: 'Nunito';
          padding: 30px 0px 0px 20px;
        }
        .logo {
          position: absolute;
          left: 50%;
          margin: 10px 0px 0px -50px;
        }
        .dropdownContent {
          z-index: 30 !important;
          background: #2f2f2f;
              border-radius: 50px;
           
        }
          .mobileModelOverview {
            display: flex;
            flex-direction: column;
            border: 1px solid ghostwhite;
            margin: 10px;
            border-radius: 50px;
            background: #434242;
          }
        }
      `}</style>
      <Container maxWidth={false} disableGutters={true}>
        <Container
          maxWidth="xl"
          disableGutters={true}
          sx={{
            display: { xs: 'flex', sm: 'flex', lg: 'none' },
            flexDirection: 'column',
            height: '90px',
            backgroundColor: '#2f2f2f',
          }}
        >
          <div className="dropdownContent">
            <div className="logo">
              <Logo />
            </div>
            <div onClick={() => setShow(!show)}>
              <button className="emoji " onClick={handleToggle}>
                {navbarOpen ? (
                  <div className={styles.rotateCenter}>
                    <CloseIcon />
                  </div>
                ) : (
                  <div className={styles.flipHorizontalBottom}>
                    <MenuIcon />
                  </div>
                )}
              </button>
              {show ? null : (
                <div className={styles.navbarMobile}>
                  <Link href="/">HOME</Link>
                  <Link href="/innovation-roadmap">INNOVATION ROADMAP</Link>
                  {/* DROPDOWN START */}
                  <div className="mobileModelOverview">
                    <Link href="">MODEL OVERVIEW:</Link>

                    <Link href="/model-overview/drug-discovery">
                      DRUG DISCOVERY
                    </Link>
                    <Link href="/model-overview/drug-discovery-pre-clinical">
                      DRUG DISCOVERY / PRE-CLINICAL
                    </Link>
                    <Link href="/model-overview/pre-clinical">
                      PRE-CLINICAL
                    </Link>
                    <Link href="/model-overview/ind">IND</Link>
                    <Link href="/model-overview/clinical-trials">
                      CLINICAL TRIALS
                    </Link>
                    <Link href="/model-overview/nda">NDA</Link>
                    <Link href="/model-overview/manufacturing-distributing">
                      MANUFACTURING AND DISTRIBUTING
                    </Link>
                  </div>
                  {/* DROPDOWN END */}
                  <Link href="/contact">CONTACT</Link>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}

// $ NAVIGATION COMPONENT DESKTOP
export default function Navigation() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Container
        maxWidth="xl"
        disableGutters={true}
        sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}
      >
        <div className={styles.navbar}>
          <Logo />
          <div className={styles.navContent}>
            <Link href="/">HOME</Link>
            <Link href="/innovation-roadmap">INNOVATION ROADMAP</Link>
            {/* DROPDOWN START */}
            <ToggleHiddenText />
            {/* DROPDOWN END */}
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </Container>
      <Hamburger />
    </Container>
  )
}
