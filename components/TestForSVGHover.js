import React from 'react'
import Images from '../public/images/index/index'
import useMightyMouse from 'react-hook-mighty-mouse'
import { styled } from '@mui/material/styles'
import styles from '../styles/Research.module.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Image from 'next/image'
import { Box, Button, Container } from '@mui/material'

const MouseHover = () => {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 600,
      border: '1px solid #dadde9',
      fontFamily: 'Nunito',
      padding: '30px',
      borderRadius: '25px',
    },
  }))

  const {
    selectedElement: { isHover },
  } = useMightyMouse(true, 'cheese')
  return (
    <>
      <div className="mouse-hover">
        <Image src={Images.money} id="cheese" alt="pic" className="cheese" />
        <div className="display">
          Hovering Over Cheese
          <div className="row">{isHover ? 'Yes' : 'No'}</div>
        </div>
      </div>

      <HtmlTooltip
        placement="top"
        followCursor={false}
        title={
          <Box>
            <h3 className="bold tooltipTitle">Pre-Clinical</h3>
            <p className="black fade">
              The pre-clinical stage evaluates the drug&apos;s safety and
              efficacy in non-human animals and extrapolates the results to
              prospective human outcomes. At this stage, in-vivo studies are
              conducted to understand optimal dosage, rates of metabolism and
              elimination, and the half-life of the drug.
            </p>

            <Button
              color="primary"
              variant="contained"
              href="/model-overview/pre-clinical"
            >
              Learn More
            </Button>
          </Box>
        }
      >
        <Container maxWidth className={styles.colourLegend}>
          <Box className={styles.colours}>
            <span className={styles.tabItem}>
              <p className="yellow">Yellow</p>
            </span>
          </Box>
        </Container>
      </HtmlTooltip>
    </>
  )
}

export default MouseHover
